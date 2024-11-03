// src/utils/rootCategorization.ts

// Import necessary constants and types
import {
  HebrewAlphabet,
  LetterClassifications,
  RootTypes,
  RootType,
  HebrewLetter,
  Positions,
} from "../constants/hebrewLetters";

// Function to classify the root (shoresh) into a specific root type
export function classifyRoot(shoresh: HebrewLetter[]): RootType {
  // Ensure the shoresh has been preprocessed (sofit letters converted, dagesh removed)
  const length = shoresh.length;

  // Handle special cases based on shoresh length
  if (length === 2) {
    // Biliteral roots (e.g., doubly weak roots)
    return RootTypes.BILITERAL;
  } else if (length === 4) {
    // Quadriliteral roots
    return RootTypes.QUADRILITERAL;
  } else if (length !== 3) {
    // Unexpected length
    return RootTypes.UNKNOWN;
  }

  // At this point, we have a triliteral root
  const [firstLetter, secondLetter, thirdLetter] = shoresh;

  // Helper functions to check for specific letters or classifications
  const isGuttural = (letter: HebrewLetter): boolean =>
    (LetterClassifications.GUTTURALS as readonly HebrewLetter[]).includes(
      letter
    );

  // Define weak letters array
  const weakLetters: HebrewLetter[] = [
    HebrewAlphabet.ALEF,
    HebrewAlphabet.HE, // Corrected from HEY to HE
    HebrewAlphabet.VAV,
    HebrewAlphabet.YOD,
    HebrewAlphabet.NUN,
  ];

  const isWeakLetter = (letter: HebrewLetter): boolean =>
    weakLetters.includes(letter);

  // Check for geminate roots (second and third letters are identical)
  if (secondLetter === thirdLetter) {
    return RootTypes.AYIN_AYIN; // Geminate root (ע"ע)
  }

  // Check for roots with weak letters at specific positions
  const isFirstLetterWeak = isWeakLetter(firstLetter);
  const isSecondLetterWeak = isWeakLetter(secondLetter);
  const isThirdLetterWeak = isWeakLetter(thirdLetter);

  // Pe-Nun roots (first letter is Nun)
  if (firstLetter === HebrewAlphabet.NUN) {
    return RootTypes.PE_NUN;
  }

  // Pe-Yod roots (first letter is Yod)
  if (firstLetter === HebrewAlphabet.YOD) {
    return RootTypes.PE_YOD;
  }

  // Pe-Alef roots (first letter is Alef)
  if (firstLetter === HebrewAlphabet.ALEF) {
    return RootTypes.PE_ALEF;
  }

  // Pe-Guttural roots (first letter is guttural)
  if (isGuttural(firstLetter)) {
    return RootTypes.GUTTURAL_FIRST;
  }

  // Ayin-Guttural roots (second letter is guttural)
  if (isGuttural(secondLetter)) {
    return RootTypes.GUTTURAL_SECOND;
  }

  // Lamed-Guttural roots (third letter is guttural)
  if (isGuttural(thirdLetter)) {
    return RootTypes.GUTTURAL_THIRD;
  }

  // Ayin-Vav roots (second letter is Vav)
  if (secondLetter === HebrewAlphabet.VAV) {
    return RootTypes.AYIN_VAV;
  }

  // Ayin-Yod roots (second letter is Yod)
  if (secondLetter === HebrewAlphabet.YOD) {
    return RootTypes.AYIN_YOD;
  }

  // Lamed-Alef roots (third letter is Alef)
  if (thirdLetter === HebrewAlphabet.ALEF) {
    return RootTypes.LAMED_ALEF;
  }

  // Lamed-Hei roots (third letter is He)
  if (thirdLetter === HebrewAlphabet.HE) {
    // Corrected from HEY to HE
    return RootTypes.LAMED_HE;
  }

  // Lamed-Yod roots (third letter is Yod)
  if (thirdLetter === HebrewAlphabet.YOD) {
    return RootTypes.LAMED_YOD;
  }

  // If none of the special cases match, it's a regular root
  return RootTypes.REGULAR;
}
