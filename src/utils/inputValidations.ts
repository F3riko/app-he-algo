// src/utils/inputValidation.ts

// Import necessary constants and types
import {
  HebrewAlphabet,
  VerbProperties,
  HebrewLetter,
  Binyan,
  Tense,
  Person,
  Gender,
  GrammaticalNumber,
} from "../constants/hebrewLetters";

// Function to validate the shoresh (root)
export function validateShoresh(shoresh: string): boolean {
  // Ensure the shoresh is a non-empty string
  if (typeof shoresh !== "string" || shoresh.trim() === "") {
    return false;
  }

  // Remove any whitespace
  shoresh = shoresh.trim();

  // Convert the shoresh string into an array of characters
  const letters = shoresh.split("");

  // Get the array of valid Hebrew letters from HebrewAlphabet
  const validLetters: HebrewLetter[] = Object.values(HebrewAlphabet);

  // Check each character to ensure it is a valid Hebrew letter
  for (const char of letters) {
    if (!validLetters.includes(char as HebrewLetter)) {
      return false;
    }
  }

  // The shoresh should typically be 2 to 4 letters
  if (letters.length < 2 || letters.length > 4) {
    return false;
  }

  return true;
}

// Function to validate the binyan
export function validateBinyan(binyan: string): boolean {
  // Ensure binyan is a non-empty string
  if (typeof binyan !== "string" || binyan.trim() === "") {
    return false;
  }

  // Trim whitespace and convert to lowercase for consistency
  binyan = binyan.trim().toLowerCase();

  // Get the array of valid binyanim from VerbProperties.BINYANIM
  const validBinyanim: Binyan[] = Object.values(VerbProperties.BINYANIM);

  // Check if the provided binyan is one of the valid binyanim
  return validBinyanim.includes(binyan as Binyan);
}

// Function to validate additional parameters for method 3
export function validateParameters(params: {
  tense?: string;
  person?: string;
  gender?: string;
  number?: string;
}): boolean {
  const { tense, person, gender, number } = params;

  // Validate tense if provided
  if (tense) {
    const validTenses: Tense[] = Object.values(VerbProperties.TENSES);
    if (!validTenses.includes(tense as Tense)) {
      return false;
    }
  }

  // Validate person if provided
  if (person) {
    const validPersons: Person[] = Object.values(VerbProperties.PERSONS);
    if (!validPersons.includes(person as Person)) {
      return false;
    }
  }

  // Validate gender if provided
  if (gender) {
    const validGenders: Gender[] = Object.values(VerbProperties.GENDERS);
    if (!validGenders.includes(gender as Gender)) {
      return false;
    }
  }

  // Validate number if provided
  if (number) {
    const validNumbers: GrammaticalNumber[] = Object.values(
      VerbProperties.GRAMMATICAL_NUMBERS
    );
    if (!validNumbers.includes(number as GrammaticalNumber)) {
      return false;
    }
  }

  return true;
}
