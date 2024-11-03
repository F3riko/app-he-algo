// src/tests/basicPaal.test.ts

import { applyBasicConjugation } from "@/conjugation/applyBasicConjugastion";
import {
  HebrewLetter,
  VerbProperties,
  HebrewAlphabet,
  Binyan,
  Tense,
  Person,
  Gender,
  GrammaticalNumber,
} from "../src/constants/hebrewLetters";

// Define a type for the test cases
interface TestCase {
  root: HebrewLetter[];
  binyan: Binyan;
  tense: Tense;
  person?: Person;
  gender?: Gender;
  number?: GrammaticalNumber;
  expected: string;
}

// Create an array of test cases
const testCases: TestCase[] = [
  // Past Tense
  // shoresh: ["א", "כ", "ל"],
  //       binyan: "paal",
  //       tense: "future",
  //       person: "third",
  //       number: "plural",
  //       gender: "feminine",
  {
    root: [HebrewAlphabet.LAMED, HebrewAlphabet.KAF, HebrewAlphabet.ALEF],
    binyan: VerbProperties.BINYANIM.PAAL,
    tense: VerbProperties.TENSES.FUTURE,
    person: VerbProperties.PERSONS.THIRD,
    gender: VerbProperties.GENDERS.FEMININE,
    number: VerbProperties.GRAMMATICAL_NUMBERS.PLURAL,
    expected: "תאכלנה",
  },
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.PAST,
  //   person: VerbProperties.PERSONS.FIRST,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "קָטַלְתִּי", // katálti
  // },
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.PAST,
  //   person: VerbProperties.PERSONS.SECOND,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "קָטַלְתָּ", // katálta
  // },
  // // Add more past tense cases for other persons, genders, numbers...
  // // Present Tense
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.PRESENT,
  //   person: VerbProperties.PERSONS.THIRD,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "קֹטֵל", // kotél
  // },
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.PRESENT,
  //   person: VerbProperties.PERSONS.THIRD,
  //   gender: VerbProperties.GENDERS.FEMININE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "קֹטֶלֶת", // kotélet
  // },
  // // Add more present tense cases...
  // // Future Tense
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.FUTURE,
  //   person: VerbProperties.PERSONS.FIRST,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "אֶקְטֹל", // ektól
  // },
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.FUTURE,
  //   person: VerbProperties.PERSONS.SECOND,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "תִּקְטֹל", // tiktól
  // },
  // // Add more future tense cases...
  // // Imperative
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.IMPERATIVE,
  //   person: VerbProperties.PERSONS.SECOND,
  //   gender: VerbProperties.GENDERS.MASCULINE,
  //   number: VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR,
  //   expected: "קְטֹל", // któl
  // },
  // // Add more imperative cases...
  // // Infinitive
  // {
  //   root: [HebrewAlphabet.QOF, HebrewAlphabet.TET, HebrewAlphabet.LAMED], // קטל
  //   binyan: VerbProperties.BINYANIM.PAAL,
  //   tense: VerbProperties.TENSES.INFINITIVE,
  //   expected: "לִקְטֹל", // liktól
  // },
  // // Add more infinitive cases if needed...
];

// Iterate over the test cases and run tests
// Iterate over the test cases and run tests
describe("applyBasicConjugation - Pa'al Binyan", () => {
  testCases.forEach((testCase) => {
    const {
      root,
      binyan,
      tense,
      person = VerbProperties.PERSONS.THIRD, // Default to third person
      gender = VerbProperties.GENDERS.MASCULINE, // Default to masculine
      number = VerbProperties.GRAMMATICAL_NUMBERS.SINGULAR, // Default to singular
      expected,
    } = testCase;

    const rootStr = root.join("");

    test(`Root: ${rootStr}, Tense: ${tense}, Person: ${person}, Gender: ${gender}, Number: ${number}`, () => {
      const result = applyBasicConjugation(
        root,
        binyan,
        tense,
        person,
        gender,
        number
      );
      expect(result).toBe(expected);
    });
  });
});
