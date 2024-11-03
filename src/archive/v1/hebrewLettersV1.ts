export const HebrewAlphabet = {
  ALEF: "א",
  BET: "ב",
  GIMEL: "ג",
  DALET: "ד",
  HE: "ה",
  VAV: "ו",
  ZAYIN: "ז",
  CHET: "ח",
  TET: "ט",
  YOD: "י",
  KAF: "כ",
  FINAL_KAF: "ך",
  LAMED: "ל",
  MEM: "מ",
  FINAL_MEM: "ם",
  NUN: "נ",
  FINAL_NUN: "ן",
  SAMECH: "ס",
  AYIN: "ע",
  PE: "פ",
  FINAL_PE: "ף",
  TZADI: "צ",
  FINAL_TZADI: "ץ",
  QOF: "ק",
  RESH: "ר",
  SHIN: "ש",
  TAV: "ת",
} as const;

// Niqqud (Vowel Points)
export const Niqqud = {
  SHEVA: "\u05B0",
  HATAF_SEGOL: "\u05B1",
  HATAF_PATAH: "\u05B2",
  HATAF_QAMATS: "\u05B3",
  HIRIQ: "\u05B4",
  TSERE: "\u05B5",
  SEGOL: "\u05B6",
  PATAH: "\u05B7",
  QAMATS: "\u05B8",
  HOLAM: "\u05B9",
  QUBUTS: "\u05BB",
  DAGESH: "\u05BC",
  METEG: "\u05BD",
  RAFE: "\u05BF",
  SHIN_DOT: "\u05C1",
  SIN_DOT: "\u05C2",
  NONE: "",
} as const;

// Letter Classifications
export const LetterClassifications = {
  // Gutturals (אהח"ע)
  GUTTURALS: [
    HebrewAlphabet.ALEF,
    HebrewAlphabet.HE,
    HebrewAlphabet.CHET,
    HebrewAlphabet.AYIN,
  ],

  // Letters that can receive dagesh (בג"ד כפ"ת)
  BEGADKEFAT: [
    HebrewAlphabet.BET,
    HebrewAlphabet.GIMEL,
    HebrewAlphabet.DALET,
    HebrewAlphabet.KAF,
    HebrewAlphabet.PE,
    HebrewAlphabet.TAV,
  ],

  // Letters that can never receive dagesh
  NO_DAGESH: [
    HebrewAlphabet.ALEF,
    HebrewAlphabet.HE,
    HebrewAlphabet.CHET,
    HebrewAlphabet.AYIN,
    HebrewAlphabet.RESH,
  ],

  // Final letters
  FINAL_LETTERS: {
    [HebrewAlphabet.KAF]: HebrewAlphabet.FINAL_KAF,
    [HebrewAlphabet.MEM]: HebrewAlphabet.FINAL_MEM,
    [HebrewAlphabet.NUN]: HebrewAlphabet.FINAL_NUN,
    [HebrewAlphabet.PE]: HebrewAlphabet.FINAL_PE,
    [HebrewAlphabet.TZADI]: HebrewAlphabet.FINAL_TZADI,
  },
} as const;

// Root Letter Positions (used in pattern names)
export const RootPositions = {
  PE: "first", // פ - First root letter
  AYIN: "second", // ע - Second root letter
  LAMED: "third", // ל - Third root letter
} as const;

// Special Root Types
export const RootTypes = {
  REGULAR: "regular",
  GUTTURAL_FIRST: "guttural_first", // פ' גרונית
  GUTTURAL_SECOND: "guttural_second", // ע' גרונית
  GUTTURAL_THIRD: "guttural_third", // ל' גרונית
  PE_NUN: "pe_nun", // פ"נ
  PE_YOD: "pe_yod", // פ"י
  AYIN_VAV: "ayin_vav", // ע"ו
  AYIN_AYIN: "ayin_ayin", // ע"ע
  LAMED_ALEF: "lamed_alef", // ל"א
  LAMED_HE: "lamed_he", // ל"ה
  PE_ALEF: "pe_alef", // פ"א
  PE_GUTTURAL: "pe_guttural", // פ' גרונית
} as const;

// Verb Properties
export const VerbProperties = {
  // Binyanim (verb patterns)
  BINYANIM: {
    PAAL: "paal", // פָּעַל
    NIFAL: "nifal", // נִפְעַל
    PIEL: "piel", // פִּעֵל
    PUAL: "pual", // פֻּעַל
    HIFIL: "hifil", // הִפְעִיל
    HUFAL: "hufal", // הֻפְעַל
    HITPAEL: "hitpael", // הִתְפַּעֵל
  },

  // Tenses and Forms
  TENSES: {
    PAST: "past", // עבר
    PRESENT: "present", // הווה
    FUTURE: "future", // עתיד
    IMPERATIVE: "imperative", // ציווי
    INFINITIVE: "infinitive", // שם הפועל
  },

  // Persons
  PERSONS: {
    FIRST: "first", // מדבר
    SECOND: "second", // נוכח
    THIRD: "third", // נסתר
  },

  // Numbers
  NUMBERS: {
    SINGULAR: "singular", // יחיד
    PLURAL: "plural", // רבים
  },

  // Genders
  GENDERS: {
    MASCULINE: "masculine", // זכר
    FEMININE: "feminine", // נקבה
  },
} as const;

// Type definitions for better TypeScript support
export type HebrewLetter = (typeof HebrewAlphabet)[keyof typeof HebrewAlphabet];
export type NiqqudMark = (typeof Niqqud)[keyof typeof Niqqud];
export type RootType = (typeof RootTypes)[keyof typeof RootTypes];
export type Binyan =
  (typeof VerbProperties.BINYANIM)[keyof typeof VerbProperties.BINYANIM];
export type Tense =
  (typeof VerbProperties.TENSES)[keyof typeof VerbProperties.TENSES];
export type Person =
  (typeof VerbProperties.PERSONS)[keyof typeof VerbProperties.PERSONS];
export type Number =
  (typeof VerbProperties.NUMBERS)[keyof typeof VerbProperties.NUMBERS];
export type Gender =
  (typeof VerbProperties.GENDERS)[keyof typeof VerbProperties.GENDERS];
