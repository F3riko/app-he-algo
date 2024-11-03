// @ts-nocheck

import {
  HebrewAlphabet,
  RootTypes,
  VerbProperties,
  LetterClassifications,
} from "../../constants/hebrewLetters";
import { ConjugationPatterns } from "../../constants/conjugationPatterns";
import { SpecialRules, RuleHelpers } from "./specialRules";
import {
  applyVowelPattern,
  addDageshToLetter,
  removeAllNiqqud,
} from "./niqqudUtils";

// Types for Function Parameters
import type {
  Binyan,
  Tense,
  Person,
  Number,
  Gender,
} from "../../constants/hebrewLetters";

type ConjugateVerbParams = {
  shoresh: string[]; // Array of 3 root letters
  binyan: Binyan;
  tense: Tense;
  person: Person;
  number: Number;
  gender: Gender;
};

type ConjugationPattern = {
  pattern: string;
  niqqud: string[];
  prefixes?: string;
  suffixes?: string;
};

export function conjugateVerb({
  shoresh,
  binyan,
  tense,
  person,
  number,
  gender,
}: ConjugateVerbParams): string {
  // 1. Validation of the Shoresh
  if (shoresh.length !== 3) {
    throw new Error(
      "Invalid shoresh: A valid root must contain exactly 3 letters."
    );
  }

  // 2. Retrieve Conjugation Pattern for the Given Binyan, Tense, Person, Number, and Gender
  const binyanPatterns =
    ConjugationPatterns[
      binyan.toUpperCase() as keyof typeof ConjugationPatterns
    ];
  if (!binyanPatterns) {
    throw new Error(`No conjugation patterns found for binyan: ${binyan}`);
  }

  const tensePatterns = binyanPatterns[tense];
  if (!tensePatterns) {
    throw new Error(
      `No conjugation patterns found for tense: ${tense} in binyan: ${binyan}`
    );
  }

  let conjugationPattern: ConjugationPattern;

  // 3. Handling Persons for Specific Tense
  if ("conjugations" in tensePatterns) {
    const genderPatterns = tensePatterns.conjugations?.[gender];
    if (!genderPatterns) {
      throw new Error(
        `No conjugation pattern found for gender: ${gender} in tense: ${tense}`
      );
    }

    const numberPatterns = genderPatterns[number];
    if (!numberPatterns) {
      throw new Error(
        `No conjugation pattern found for number: ${number} in gender: ${gender} for tense: ${tense}`
      );
    }

    const personPatterns =
      numberPatterns[person as keyof typeof numberPatterns];
    if (
      !personPatterns ||
      !("pattern" in personPatterns && "niqqud" in personPatterns)
    ) {
      throw new Error(
        `No conjugation pattern found for person: ${person}, number: ${number}, gender: ${gender} in tense: ${tense}`
      );
    }
    conjugationPattern = personPatterns;
  } else {
    // If no specific person is required (e.g., infinitives or present tense)
    // if (!("pattern" in tensePatterns && "niqqud" in tensePatterns)) {
    //   throw new Error(
    //     `Conjugation pattern is not available for the given input.`
    //   );
    // }
    console.log(tensePatterns);
    conjugationPattern = tensePatterns?.[gender]?.[
      number
    ] as ConjugationPattern;
    console.log(conjugationPattern);
  }

  let { pattern, niqqud, prefixes = "", suffixes = "" } = conjugationPattern;
  console.log(pattern, niqqud, prefixes, suffixes);

  // 4. Apply Special Rules Based on Root Type
  // const rootType = determineRootType(shoresh);
  // if (
  //   rootType &&
  //   RuleHelpers.shouldApplyRule(shoresh, rootType, binyan, tense)
  // ) {
  //   const { root: transformedRoot, niqqud: transformedNiqqud } =
  //     RuleHelpers.applySpecialRules(shoresh, binyan, tense);
  //   shoresh = transformedRoot;
  //   niqqud = transformedNiqqud.length ? transformedNiqqud : niqqud;
  // }

  // 5. Replace R1, R2, R3 in Pattern with Root Letters
  const rootLetters = {
    R1: shoresh[0],
    R2: shoresh[1],
    R3: shoresh[2],
  };
  Object.entries(rootLetters).forEach(([key, value]) => {
    pattern = pattern.replace(new RegExp(key, "g"), value);
  });
  console.log(pattern);
  // 6. Apply Niqqud to Root Letters Using Utility
  let conjugatedRoot = applyVowelPattern(pattern, niqqud);

  // 7. Apply Dagesh if Needed (e.g., for BEGADKEFAT letters)
  conjugatedRoot = applyDageshIfNeeded(conjugatedRoot, shoresh);

  // 8. Add Prefixes and Suffixes
  let finalForm = `${prefixes}${conjugatedRoot}${suffixes}`;

  // 9. Remove any redundant niqqud using utility if needed
  finalForm = removeAllNiqqud(finalForm);

  // 10. Return the final conjugated verb form
  return finalForm;
}

// Helper Function to Determine Root Type
function determineRootType(shoresh: string[]): keyof typeof RootTypes | null {
  if (shoresh[0] === HebrewAlphabet.NUN) {
    return "PE_NUN";
  } else if (
    (LetterClassifications.GUTTURALS as readonly string[]).includes(shoresh[0])
  ) {
    return "GUTTURAL_FIRST";
  } else if (shoresh[1] === HebrewAlphabet.VAV) {
    return "AYIN_VAV";
  } else if (shoresh[2] === HebrewAlphabet.HE) {
    return "LAMED_HE";
  } else if (shoresh[0] === HebrewAlphabet.YOD) {
    return "PE_YOD";
  } else if (shoresh[0] === shoresh[1]) {
    return "AYIN_AYIN";
  } else if (shoresh[2] === HebrewAlphabet.ALEF) {
    return "LAMED_ALEF";
  }
  return null;
}

// Helper Function to Apply Dagesh if Needed
function applyDageshIfNeeded(
  conjugatedRoot: string,
  shoresh: string[]
): string {
  const begadkefatLetters: readonly ["ב", "ג", "ד", "כ", "פ", "ת"] =
    LetterClassifications.BEGADKEFAT;
  return conjugatedRoot
    .split("")
    .map((char, index) => {
      if (
        begadkefatLetters.includes(
          shoresh[index] as "ב" | "ג" | "ד" | "כ" | "פ" | "ת"
        )
      ) {
        return addDageshToLetter(char);
      }
      return char;
    })
    .join("");
}
