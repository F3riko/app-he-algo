import {
  HebrewLetter,
  Binyan,
  Tense,
  Person,
  Gender,
  GrammaticalNumber,
  VerbProperties,
  Niqqud,
  HebrewAlphabet,
} from "../constants/hebrewLetters";

// Define Template interface for clarity
interface Template {
  pattern: string;
  niqqud: string[];
  suffixes?: string;
  prefixes?: string;
}

// Define the main function with type-safe access
export function applyBasicConjugation(
  root: HebrewLetter[],
  binyan: Binyan,
  tense: Tense,
  person: Person = VerbProperties.PERSONS.THIRD,
  gender: Gender = VerbProperties.GENDERS.MASCULINE,
  number: GrammaticalNumber = VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR
): string {
  if (binyan !== VerbProperties.BINYANIM.PAAL) {
    throw new Error(`Binyan '${binyan}' is not supported in this function.`);
  }

  const templates = getUpdatedPaalTemplates();

  // Access the template based on tense
  let template: Template | undefined;
  if (tense === VerbProperties.TENSES.INFINITIVE) {
    // Infinitive templates are simpler and don't use person, gender, or number
    template = templates[tense]?.construct;
  } else if (tense === VerbProperties.TENSES.IMPERATIVE) {
    template = (
      templates[tense] as Record<Gender, Record<GrammaticalNumber, Template>>
    )?.[gender]?.[number];
  } else {
    template = (
      templates[tense] as Record<
        Gender,
        Record<GrammaticalNumber, Record<Person, Template>>
      >
    )?.[gender]?.[number]?.[person];
  }

  if (!template) {
    throw new Error(
      `No conjugation template found for tense '${tense}', person '${person}', gender '${gender}', and number '${number}'.`
    );
  }

  return applyTemplateToRoot(root, template);
}

// Updated Pa'al Templates with each niqqud matching the length of prefix + root + suffix
function getUpdatedPaalTemplates() {
  return {
    // PAST TENSE
    [VerbProperties.TENSES.PAST]: {
      masculine: {
        singular: {
          first: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.TSERE,
            ],
            suffixes: "תי",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.SEGOL,
            ],
            suffixes: "ת",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.NONE,
            ],
          },
        },
        plural: {
          first: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.PATAH,
            ],
            suffixes: "נו",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.PATAH,
            ],
            suffixes: "תם",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.PATAH,
            ],
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          first: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.NONE,
            ],
            suffixes: "תי",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.NONE,
            ],
            suffixes: "ת",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.SEGOL,
            ],
            suffixes: HebrewAlphabet.HE,
          },
        },
        plural: {
          first: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.NONE,
            ],
            suffixes: "נו",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.SEGOL,
            ],
            suffixes: "תן",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [
              Niqqud.NONE,
              Niqqud.QAMATS,
              Niqqud.PATAH,
              Niqqud.NONE,
              Niqqud.QAMATS,
            ],
            suffixes: "ו",
          },
        },
      },
    },

    // PRESENT TENSE
    [VerbProperties.TENSES.PRESENT]: {
      masculine: {
        singular: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.NONE, Niqqud.HOLAM, Niqqud.TSERE, Niqqud.NONE],
        },
        plural: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.NONE, Niqqud.HOLAM, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ים",
        },
      },
      feminine: {
        singular: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.NONE, Niqqud.HOLAM, Niqqud.TSERE, Niqqud.NONE],
          suffixes: "ת",
        },
        plural: {
          pattern: "R1וR2R3",
          niqqud: [Niqqud.NONE, Niqqud.HOLAM, Niqqud.NONE, Niqqud.NONE],
          suffixes: "ות",
        },
      },
    },

    // FUTURE TENSE
    [VerbProperties.TENSES.FUTURE]: {
      masculine: {
        singular: {
          first: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "א",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "י",
          },
        },
        plural: {
          first: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "נ",
          },
          second: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
            suffixes: "ו",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "י",
            suffixes: "ו",
          },
        },
      },
      feminine: {
        singular: {
          second: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
            suffixes: "י",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
          },
        },
        plural: {
          second: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
            suffixes: "נה",
          },
          third: {
            pattern: "R1R2R3",
            niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
            prefixes: "ת",
            suffixes: "נה",
          },
        },
      },
    },

    // IMPERATIVE
    [VerbProperties.TENSES.IMPERATIVE]: {
      masculine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "ו",
        },
      },
      feminine: {
        singular: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "י",
        },
        plural: {
          pattern: "R1R2R3",
          niqqud: [Niqqud.NONE, Niqqud.SHEVA, Niqqud.HOLAM, Niqqud.NONE],
          suffixes: "נה",
        },
      },
    },

    // INFINITIVE
    [VerbProperties.TENSES.INFINITIVE]: {
      construct: {
        pattern: "R1R2וR3",
        niqqud: [
          Niqqud.NONE,
          Niqqud.SHEVA,
          Niqqud.DAGESH,
          Niqqud.HOLAM,
          Niqqud.NONE,
        ],
        prefixes: "ל",
      },
    },
  };
}

// Apply the template to the root letters
function applyTemplateToRoot(
  root: HebrewLetter[],
  template: {
    pattern: string;
    niqqud: string[];
    prefixes?: string;
    suffixes?: string;
  }
): string {
  const { pattern, niqqud, prefixes = "", suffixes = "" } = template;

  // Map placeholders to root letters
  const letterMapping: Record<string, HebrewLetter> = {
    R1: root[0],
    R2: root[1],
    R3: root[2],
  };

  // Step 1: Replace placeholders in the pattern with root letters
  // Split the pattern into tokens: 'R1', 'R2', 'R3', or single characters
  const tokens = pattern.match(/R[1-3]|[^R]/g);
  if (!tokens) {
    throw new Error("Invalid pattern");
  }

  // Replace placeholders with root letters
  const baseWordArray = tokens.map((token) => letterMapping[token] || token);

  // Step 2: Combine prefixes, base word, and suffixes into a single array
  const prefixArray = prefixes.split("");
  const suffixArray = suffixes.split("");
  const combinedArray = [...prefixArray, ...baseWordArray, ...suffixArray];

  // Step 3: Apply niqqud to each character in the combined array
  if (combinedArray.length !== niqqud.length) {
    throw new Error(
      `The length of combined characters (${combinedArray.length}) and niqqud marks (${niqqud.length}) must match.`
    );
  }

  const conjugatedFormArray = combinedArray.map(
    (char, index) => char + (niqqud[index] || Niqqud.NONE)
  );

  // Step 4: Join the array to form the final conjugated string
  const result = conjugatedFormArray.join("");

  // Debugging logs (you can remove or comment these out)
  console.log("Root Letters:", root);
  console.log("Pattern Tokens:", tokens);
  console.log("Base Word Array:", baseWordArray);
  console.log("Combined Array:", combinedArray);
  console.log("Niqqud Array:", niqqud);
  console.log("Conjugated Form Array:", conjugatedFormArray);
  console.log("Result:", result);

  return result;
}

