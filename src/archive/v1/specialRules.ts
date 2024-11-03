// src/constants/specialRules.ts

import {
  RootTypes,
  LetterClassifications,
  Niqqud,
  VerbProperties,
  Positions,
  HebrewAlphabet,
  RootType,
  Binyan,
  Tense,
  Position,
  HebrewLetter,
  NiqqudMark,
} from "../../constants/hebrewLetters";

const {
  SHEVA,
  HATAF_PATAH,
  PATAH,
  QAMATS,
  DAGESH,
  HIRIQ,
  TSERE,
  SEGOL,
  HOLAM,
  QUBUTS,
} = Niqqud;

// Types for rule definitions
export type TransformationRule = {
  condition: (root: string[], position: Position) => boolean;
  transform: (
    pattern: string,
    niqqud: string[]
  ) => { pattern: string; niqqud: string[] };
};

export type AssimilationRule = {
  letters: HebrewLetter[];
  position: Position;
  conditions?: {
    binyan?: Binyan[];
    tense?: Tense[];
  };
  result: {
    assimilate: boolean;
    replacement?: HebrewLetter;
    addDagesh?: boolean;
    vowelChange?: NiqqudMark;
  };
};

// Special rules by root type
export const SpecialRules: Record<RootType, any> = {
  // Pe-Nun Verbs (פ"נ)
  pe_nun: {
    assimilation: {
      condition: (root: string[]) =>
        root[Positions.FIRST] === HebrewAlphabet.NUN,
      rules: {
        [VerbProperties.BINYANIM.PAAL]: {
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(HebrewAlphabet.NUN, ""),
              niqqud: [DAGESH, ...niqqud.slice(1)],
            }),
          },
          [VerbProperties.TENSES.IMPERATIVE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(HebrewAlphabet.NUN, ""),
              niqqud: [DAGESH, ...niqqud.slice(1)],
            }),
          },
          [VerbProperties.TENSES.INFINITIVE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(HebrewAlphabet.NUN, ""),
              niqqud: [DAGESH, ...niqqud.slice(1)],
            }),
          },
        },
      },
    },
  },

  // Guttural First Letters
  guttural_first: {
    vowelChanges: {
      condition: (root: HebrewLetter[]) =>
        (LetterClassifications.GUTTURALS as readonly HebrewLetter[]).includes(
          root[Positions.FIRST]
        ),
      rules: {
        [VerbProperties.BINYANIM.PAAL]: {
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern,
              niqqud: [HATAF_PATAH, ...niqqud.slice(1)],
            }),
          },
          [VerbProperties.TENSES.IMPERATIVE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern,
              niqqud: [HATAF_PATAH, ...niqqud.slice(1)],
            }),
          },
        },
        [VerbProperties.BINYANIM.NIFAL]: {
          all: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern,
              niqqud: [HATAF_PATAH, ...niqqud.slice(1)],
            }),
          },
        },
      },
    },
  },

  // Ayin-Vav Verbs (ע"ו)
  ayin_vav: {
    stemChange: {
      condition: (root: string[]) =>
        root[Positions.SECOND] === HebrewAlphabet.VAV,
      rules: {
        [VerbProperties.BINYANIM.PAAL]: {
          [VerbProperties.TENSES.PAST]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace("R2", ""),
              niqqud: [QAMATS],
            }),
          },
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace("R2", HebrewAlphabet.VAV),
              niqqud: [PATAH, QAMATS],
            }),
          },
        },
      },
    },
  },

  // Lamed-He Verbs (ל"ה)
  lamed_he: {
    ending: {
      condition: (root: string[]) =>
        root[Positions.THIRD] === HebrewAlphabet.HE,
      rules: {
        all: {
          [VerbProperties.TENSES.PAST]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(/ה$/, HebrewAlphabet.YOD),
              niqqud,
            }),
          },
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern,
              niqqud: [...niqqud.slice(0, -1), QAMATS],
            }),
          },
          [VerbProperties.TENSES.PRESENT]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(/ה$/, HebrewAlphabet.TAV),
              niqqud,
            }),
          },
        },
      },
    },
  },

  // Pe-Yod Verbs (פ"י)
  pe_yod: {
    assimilation: {
      condition: (root: string[]) =>
        root[Positions.FIRST] === HebrewAlphabet.YOD,
      rules: {
        [VerbProperties.BINYANIM.PAAL]: {
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(HebrewAlphabet.YOD, ""),
              niqqud,
            }),
          },
        },
      },
    },
  },

  // Ayin-Ayin Verbs (ע"ע)
  ayin_ayin: {
    reduplication: {
      condition: (root: string[]) =>
        root[Positions.SECOND] === root[Positions.THIRD],
      rules: {
        [VerbProperties.BINYANIM.PIEL]: {
          [VerbProperties.TENSES.PAST]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(/R2/, "R1R2"),
              niqqud: [HIRIQ, QAMATS, SHEVA],
            }),
          },
          [VerbProperties.TENSES.PRESENT]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(/R2/, "R1R2"),
              niqqud: [HIRIQ, SEGOL],
            }),
          },
        },
      },
    },
  },

  // Lamed-Alef Verbs (ל"א)
  lamed_alef: {
    vowelChange: {
      condition: (root: string[]) =>
        root[Positions.THIRD] === HebrewAlphabet.ALEF,
      rules: {
        [VerbProperties.BINYANIM.PAAL]: {
          [VerbProperties.TENSES.FUTURE]: {
            transform: (pattern: string, niqqud: string[]) => ({
              pattern: pattern.replace(/א$/, HebrewAlphabet.YOD),
              niqqud: [HIRIQ, ...niqqud.slice(1)],
            }),
          },
        },
      },
    },
  },

  // Default for other root types
  regular: {},
  guttural_second: {},
  guttural_third: {},
  pe_alef: {},
  pe_guttural: {},
};

// Assimilation rules for specific letter combinations
export const AssimilationRules: AssimilationRule[] = [
  {
    letters: [HebrewAlphabet.NUN],
    position: Positions.FIRST,
    conditions: {
      binyan: [VerbProperties.BINYANIM.PAAL, VerbProperties.BINYANIM.HIFIL],
      tense: [
        VerbProperties.TENSES.FUTURE,
        VerbProperties.TENSES.IMPERATIVE,
        VerbProperties.TENSES.INFINITIVE,
      ],
    },
    result: {
      assimilate: true,
      addDagesh: true,
    },
  },
  {
    letters: [HebrewAlphabet.YOD],
    position: Positions.FIRST,
    conditions: {
      binyan: [VerbProperties.BINYANIM.PAAL],
      tense: [VerbProperties.TENSES.FUTURE],
    },
    result: {
      assimilate: true,
      replacement: HebrewAlphabet.VAV,
    },
  },
];

// Helper functions for applying special rules
export const RuleHelpers = {
  shouldApplyRule(
    root: string[],
    rootType: RootType,
    binyan: Binyan,
    tense: Tense
  ): boolean {
    const rule = SpecialRules[rootType];
    if (!rule) return false;

    for (const ruleSet of Object.values(rule)) {
      const { condition } = ruleSet as any;
      if (condition && condition(root)) {
        return true;
      }
    }
    return false;
  },

  applyAssimilation(
    root: HebrewLetter[],
    position: Position,
    binyan: Binyan,
    tense: Tense
  ): { root: HebrewLetter[]; addDagesh: boolean } {
    for (const rule of AssimilationRules) {
      if (
        rule.position === position &&
        rule.letters.includes(root[position]) &&
        (!rule.conditions?.binyan || rule.conditions.binyan.includes(binyan)) &&
        (!rule.conditions?.tense || rule.conditions.tense.includes(tense))
      ) {
        const newRoot = rule.result.replacement
          ? [
              ...root.slice(0, position),
              rule.result.replacement,
              ...root.slice(position + 1),
            ]
          : [...root.slice(0, position), ...root.slice(position + 1)];
        return {
          root: newRoot,
          addDagesh: !!rule.result.addDagesh,
        };
      }
    }
    return { root, addDagesh: false };
  },

  handleMixedWeakRoots(
    root: string[]
  ): { root: string[]; niqqud: string[] } | null {
    // Handles roots that are doubly weak (e.g., Pe-Yod and Lamed-He)
    if (
      root[Positions.FIRST] === HebrewAlphabet.YOD &&
      root[Positions.THIRD] === HebrewAlphabet.HE
    ) {
      // Example handling for Pe-Yod and Lamed-He combination
      const transformedRoot = [...root];
      transformedRoot[Positions.FIRST] = ""; // Remove YOD
      transformedRoot[Positions.THIRD] = HebrewAlphabet.YOD; // Replace HE with YOD
      const niqqud = [DAGESH, QAMATS];
      return { root: transformedRoot, niqqud };
    }
    return null;
  },

  applyDageshIfNeeded(
    root: HebrewLetter[],
    position: Position,
    conditions: { binyan?: Binyan; tense?: Tense }
  ): boolean {
    if (
      (LetterClassifications.BEGADKEFAT as readonly HebrewLetter[]).includes(
        root[position]
      )
    ) {
      if (
        conditions.binyan === VerbProperties.BINYANIM.PAAL &&
        conditions.tense === VerbProperties.TENSES.FUTURE
      ) {
        return true;
      }
    }
    return false;
  },

  adjustFinalLetter(
    root: string[],
    tense: Tense,
    binyan: Binyan
  ): { root: string[]; niqqud: string[] } | null {
    let transformedRoot = [...root];
    let niqqud: string[] = [];
    if (
      root[Positions.THIRD] === HebrewAlphabet.HE &&
      (tense === VerbProperties.TENSES.FUTURE ||
        binyan === VerbProperties.BINYANIM.PAAL)
    ) {
      transformedRoot[Positions.THIRD] = HebrewAlphabet.YOD;
      niqqud = [HIRIQ];
      return { root: transformedRoot, niqqud };
    } else if (root[Positions.THIRD] === HebrewAlphabet.ALEF) {
      transformedRoot[Positions.THIRD] = "";
      niqqud = [PATAH];
      return { root: transformedRoot, niqqud };
    }
    return null;
  },

  applySpecialRules(
    root: HebrewLetter[],
    binyan: Binyan,
    tense: Tense
  ): { root: HebrewLetter[]; niqqud: string[] } {
    // Ensured return type is HebrewLetter[]
    let transformedRoot: HebrewLetter[] = [...root]; // Explicitly typed as HebrewLetter[]
    let niqqud: string[] = [];

    // Apply mixed weak root handling
    const mixedWeakResult = this.handleMixedWeakRoots(root);
    if (mixedWeakResult) {
      transformedRoot = mixedWeakResult.root as HebrewLetter[]; // Type assertion to ensure compatibility
      niqqud = mixedWeakResult.niqqud;
    }

    // Apply Dagesh if needed
    if (this.applyDageshIfNeeded(root, Positions.FIRST, { binyan, tense })) {
      transformedRoot = [
        DAGESH as HebrewLetter, // Ensure DAGESH is treated as a HebrewLetter here
        ...transformedRoot.slice(1),
      ];
    }

    // Adjust final letters if needed
    const adjustedFinalLetter = this.adjustFinalLetter(
      transformedRoot,
      tense,
      binyan
    );
    if (adjustedFinalLetter) {
      transformedRoot = adjustedFinalLetter.root as HebrewLetter[]; // Type assertion to ensure compatibility
      niqqud = adjustedFinalLetter.niqqud;
    }

    return { root: transformedRoot, niqqud };
  },
};
