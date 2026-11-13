import { Medication, InteractionAlert, InteractionSeverity } from '../types/medication';

function normalizeText(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

export function checkInteractions(selectedMedications: Medication[]): InteractionAlert[] {
  if (selectedMedications.length < 2) return [];

  const alerts: InteractionAlert[] = [];
  const processedPairs = new Set<string>();

  for (let i = 0; i < selectedMedications.length; i++) {
    for (let j = i + 1; j < selectedMedications.length; j++) {
      const medA = selectedMedications[i];
      const medB = selectedMedications[j];
      const pairKey = [medA.id, medB.id].sort().join('___');

      if (processedPairs.has(pairKey)) continue;

      const normA = normalizeText(medA.genericName);
      const normB = normalizeText(medB.genericName);
      const brandsA = medA.commercialNames.map(normalizeText);
      const brandsB = medB.commercialNames.map(normalizeText);
      const classA = normalizeText(medA.therapeuticClass);
      const classB = normalizeText(medB.therapeuticClass);

      let found = false;

      // 1. Revisar interacciones declaradas en medA respecto a medB
      for (const inter of medA.interactions) {
        const target = normalizeText(inter.interactsWith || inter.interactingDrug || '');
        if (!target) continue;
        const matches = 
          normB.includes(target) ||
          target.includes(normB) ||
          brandsB.some(b => b.includes(target) || target.includes(b)) ||
          classB.includes(target) ||
          target.includes(classB) ||
          (target.includes('aine') && (classB.includes('aine') || classB.includes('antiinflamatorio'))) ||
          (target.includes('anticoagulant') && classB.includes('anticoagulant')) ||
          (target.includes('corticosteroid') && classB.includes('corticosteroid')) ||
          (target.includes('opioide') && classB.includes('opioide'));

        if (matches) {
          alerts.push({
            drugA: medA.genericName,
            drugB: medB.genericName,
            severity: inter.severity,
            clinicalEffect: inter.clinicalEffect,
            recommendation: inter.recommendation
          });
          found = true;
          break;
        }
      }

      // 2. Si no se encontró en medA, revisar en medB respecto a medA
      if (!found) {
        for (const inter of medB.interactions) {
          const target = normalizeText(inter.interactsWith || inter.interactingDrug || '');
          if (!target) continue;
          const matches = 
            normA.includes(target) ||
            target.includes(normA) ||
            brandsA.some(b => b.includes(target) || target.includes(b)) ||
            classA.includes(target) ||
            target.includes(classA) ||
            (target.includes('aine') && (classA.includes('aine') || classA.includes('antiinflamatorio'))) ||
            (target.includes('anticoagulant') && classA.includes('anticoagulant')) ||
            (target.includes('corticosteroid') && classA.includes('corticosteroid')) ||
            (target.includes('opioide') && classA.includes('opioide'));

          if (matches) {
            alerts.push({
              drugA: medB.genericName,
              drugB: medA.genericName,
              severity: inter.severity,
              clinicalEffect: inter.clinicalEffect,
              recommendation: inter.recommendation
            });
            found = true;
            break;
          }
        }
      }

      // 3. Reglas farmacodinámicas generales universales
      if (!found) {
        // AINE + Anticoagulante oral
        const isAine = (m: Medication) => normalizeText(m.therapeuticClass).includes('aine') || normalizeText(m.genericName).includes('ibuprofeno');
        const isAnticoag = (m: Medication) => normalizeText(m.therapeuticClass).includes('anticoagulante') || ['warfarina', 'apixaban', 'acenocumarol', 'rivaroxaban', 'dabigatran'].some(a => normalizeText(m.genericName).includes(a));

        if ((isAine(medA) && isAnticoag(medB)) || (isAine(medB) && isAnticoag(medA))) {
          alerts.push({
            drugA: medA.genericName,
            drugB: medB.genericName,
            severity: 'Contraindicada',
            clinicalEffect: 'Aumento sinérgico crítico del riesgo de hemorragia gastrointestinal alta y sangrados mayores.',
            recommendation: 'Evitar la asociación. Emplear analgésicos alternativos sin acción antiagregante/anticoagulante (Paracetamol).'
          });
          found = true;
        }

        // AINE + IECA/ARA-II
        const isIeca = (m: Medication) => normalizeText(m.therapeuticClass).includes('ieca') || normalizeText(m.therapeuticClass).includes('angiotensina') || normalizeText(m.genericName).includes('enalapril');
        if (!found && ((isAine(medA) && isIeca(medB)) || (isAine(medB) && isIeca(medA)))) {
          alerts.push({
            drugA: medA.genericName,
            drugB: medB.genericName,
            severity: 'Mayor',
            clinicalEffect: 'Atenuación del efecto hipotensor y riesgo de insuficiencia renal aguda por vasoconstricción de la arteriola renal aferente.',
            recommendation: 'Monitorizar función renal y presión arterial. Evitar uso continuo de AINEs.'
          });
          found = true;
        }
      }

      processedPairs.add(pairKey);
    }
  }

  // Ordenar alertas por severidad: Contraindicada > Mayor/Grave > Moderada > Menor
  const rank: Record<string, number> = {
    'Contraindicada': 4,
    'Mayor': 3,
    'Grave': 3,
    'Moderada': 2,
    'Menor': 1
  };

  return alerts.sort((a, b) => (rank[b.severity] || 0) - (rank[a.severity] || 0));
}
