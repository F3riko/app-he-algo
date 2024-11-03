// src/utils/shoreshPreprocessing.ts

// Import necessary constants and types
import {
  HebrewAlphabet,
  LetterClassifications,
  Niqqud,
  HebrewLetter,
} from "../constants/hebrewLetters";

// Function to convert sofit letters to their standard forms
export function convertSofitLetters(shoresh: string): string {
  // Create a mapping from final letters to their standard forms
  const finalToStandardMap: Record<string, HebrewLetter> = {
    [HebrewAlphabet.FINAL_KAF]: HebrewAlphabet.KAF,
    [HebrewAlphabet.FINAL_MEM]: HebrewAlphabet.MEM,
    [HebrewAlphabet.FINAL_NUN]: HebrewAlphabet.NUN,
    [HebrewAlphabet.FINAL_PE]: HebrewAlphabet.PE,
    [HebrewAlphabet.FINAL_TZADI]: HebrewAlphabet.TZADI,
  };

  // Convert shoresh string into an array of characters
  const letters = shoresh.split("");

  // Map each letter to its standard form if it's a final letter
  const normalizedLetters = letters.map((char) =>
    finalToStandardMap[char] ? finalToStandardMap[char] : char
  );

  // Join the letters back into a string
  return normalizedLetters.join("");
}

// Function to remove unnecessary dagesh from the shoresh
export function removeUnnecessaryDagesh(shoresh: string): string {
  // The DAGESH character is defined in Niqqud.DAGESH
  // Remove all occurrences of DAGESH from the shoresh
  const shoreshWithoutDagesh = shoresh.replace(
    new RegExp(Niqqud.DAGESH, "g"),
    ""
  );
  return shoreshWithoutDagesh;
}

// Function to determine the length of the shoresh
export function determineShoreshLength(shoresh: string): number {
  // After preprocessing, we can determine the length of the shoresh
  // Convert shoresh into an array of letters
  const letters = shoresh.split("");
  // Return the number of letters
  return letters.length;
}
