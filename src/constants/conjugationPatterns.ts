import { Niqqud } from "./hebrewLetters";

const { SHEVA, HIRIQ, TSERE, PATAH, QAMATS, QUBUTS, DAGESH, NONE } = Niqqud;

// Template symbols:
// R1, R2, R3 - Root letters (שורש)
// N - Prefix נ
// H - Prefix ה
// M - Prefix מ
// Y - Prefix י
// T - Prefix ת

export type PatternTemplate = {
  pattern: string;
  niqqud: string[];
  prefixes?: string;
  suffixes?: string;
};

export const ConjugationPatterns = {
  PAAL: {
    past: {
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            first: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            first: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.QAMATS, Niqqud.PATAH, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.HOLAM, Niqqud.TSERE, Niqqud.NONE],
        },
        plural: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.HOLAM, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.HOLAM, Niqqud.TSERE, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.HOLAM, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "וR2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "א",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "י",
            },
          },
          plural: {
            first: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "נ",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
              suffixes: "ו",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "י",
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            first: {
              pattern: "וR2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "א",
            },
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
              suffixes: "י",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
            },
          },
          plural: {
            second: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
              suffixes: "נה",
            },
            third: {
              pattern: "R1R2R3",
              niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
              prefixes: "ת",
              suffixes: "נה",
            },
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "R1R2וR3",
        niqqud: [Niqqud.SHEVA, Niqqud.DAGESH, Niqqud.HOLAM, Niqqud.NONE],
        prefixes: "ל",
        suffixes: "", // Added for consistency, if no suffixes, mark as empty
      },
    },
  },

  NIFAL: {
    past: {
      base: {
        pattern: "נR1R2R3",
        niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "נR1R2R3",
              niqqud: [SHEVA, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "נR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
        },
        plural: {
          pattern: "נR1ר2R3",
          niqqud: [SHEVA, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "נR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "נR1ר2R3",
          niqqud: [SHEVA, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          },
          second: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          },
          third: {
            pattern: "יR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          },
        },
        plural: {
          first: {
            pattern: "נR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          },
          second: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          },
        },
        plural: {
          second: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תR1ר2R3",
            niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "הR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
        },
        plural: {
          pattern: "הR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "הR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "הR1ר2R3",
          niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "להR1ר2R3",
        niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
      },
      absolute: {
        pattern: "להR1ר2R3",
        niqqud: [SHEVA, QAMATS, Niqqud.NONE, Niqqud.NONE],
      },
    },
  },

  PIEL: {
    present: {
      masculine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, Niqqud.NONE, TSERE, Niqqud.NONE],
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, Niqqud.NONE, TSERE, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, Niqqud.NONE, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    past: {
      base: {
        pattern: "מR1R2R3",
        niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, SHEVA, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [HIRIQ, QAMATS, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          },
        },
        plural: {
          first: {
            pattern: "נR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          },
        },
        plural: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "לR1R2R3",
        niqqud: [HIRIQ, SHEVA, TSERE, Niqqud.NONE],
      },
      absolute: {
        pattern: "לR1R2R3",
        niqqud: [HIRIQ, QAMATS, TSERE, Niqqud.NONE],
      },
    },
  },

  PUAL: {
    past: {
      base: {
        pattern: "מR1R2R3",
        niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "מR1R2R3",
              niqqud: [QUBUTS, DAGESH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, DAGESH, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, DAGESH, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אוR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          },
          third: {
            pattern: "יR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          first: {
            pattern: "נוR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          second: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תR1ר2R3",
            niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "להR1ר2R3",
        niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
      },
      absolute: {
        pattern: "להR1ר2R3",
        niqqud: [QUBUTS, DAGESH, QAMATS, Niqqud.NONE],
      },
    },
  },

  HITPAEL: {
    past: {
      base: {
        pattern: "התR1R2R3",
        niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, QAMATS, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "התR1R2R3",
              niqqud: [HIRIQ, QAMATS, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "מתR1ר2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "מתR1ר2R3",
          niqqud: [HIRIQ, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "מתR1ר2R3",
          niqqud: [HIRIQ, QAMATS, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "מתR1ר2R3",
          niqqud: [HIRIQ, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          third: {
            pattern: "יתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          first: {
            pattern: "נתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          second: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תתR1ר2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "התR1ר2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "התR1ר2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "התR1ר2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "התR1ר2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "להתR1ר2R3",
        niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
      },
      absolute: {
        pattern: "להתR1ר2R3",
        niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
      },
    },
  },

  HIFIL: {
    past: {
      base: {
        pattern: "הR1R2R3",
        niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
            },
          },
          plural: {
            first: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, SHEVA, HIRIQ, Niqqud.NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [PATAH, Niqqud.NONE, Niqqud.NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, SHEVA, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [HIRIQ, SHEVA, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          first: {
            pattern: "נR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          },
        },
        plural: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "להR1ר2R3",
        niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
      },
      absolute: {
        pattern: "להR1ר2R3",
        niqqud: [HIRIQ, SHEVA, QAMATS, Niqqud.NONE],
      },
    },
  },

  HUFAL: {
    past: {
      base: {
        pattern: "הR1R2R3",
        niqqud: [QUBUTS, QAMATS],
      },
      conjugations: {
        masculine: {
          singular: {
            first: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "תי",
            },
            second: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
            },
          },
          plural: {
            first: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "נו",
            },
            second: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "תם",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, NONE],
              suffixes: "ו",
            },
          },
        },
        feminine: {
          singular: {
            second: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "ת",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "ה",
            },
          },
          plural: {
            second: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, QAMATS, NONE],
              suffixes: "תן",
            },
            third: {
              pattern: "הR1R2R3",
              niqqud: [QUBUTS, NONE],
              suffixes: "ו",
            },
          },
        },
      },
    },
    present: {
      masculine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, SHEVA, NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "מR1R2R3",
          niqqud: [QUBUTS, SHEVA, NONE],
          suffixes: "ות",
        },
      },
    },
    future: {
      masculine: {
        singular: {
          first: {
            pattern: "אוR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          },
        },
        plural: {
          first: {
            pattern: "נוR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          },
          second: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
            suffixes: "ו",
          },
          third: {
            pattern: "יR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
            suffixes: "י",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          },
        },
        plural: {
          second: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
            suffixes: "נה",
          },
          third: {
            pattern: "תR1R2R3",
            niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
            suffixes: "נה",
          },
        },
      },
    },
    imperative: {
      masculine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "הR1R2R3",
          niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
          suffixes: "נה",
        },
      },
    },
    infinitive: {
      construct: {
        pattern: "להR1R2R3",
        niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
      },
      absolute: {
        pattern: "להR1R2R3",
        niqqud: [QUBUTS, SHEVA, QAMATS, NONE],
      },
    },
  },
};
