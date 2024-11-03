export const niqqudMap: Record<string, string> = {
  kamatz: "ָ",
  patach: "ַ",
  tsere: "ֵ",
  segol: "ֶ",
  shva: "ְ",
  holam: "ֹ",
  hirik: "ִ",
  dagesh: "ּ",
  kubutz: "ֻ",
  qamatsQatan: "ׇ",
};

export const applyVowelPattern = (root: string, pattern: string[]): string => {
  // if (root.length !== pattern.length) {
  //   throw new Error("Root and pattern length must match.");
  // }
  let result = "";
  for (let i = 0; i < root.length; i++) {
    result += root[i] + (pattern[i] || "");
  }
  return result;
};

export const removeAllNiqqud = (text: string): string => {
  return text.replace(/[ְ-ׇּ]/g, "");
};

export const findVowel = (char: string): string | null => {
  const vowels = Object.values(niqqudMap);
  return vowels.includes(char) ? char : null;
};

export const describeNiqqud = (niqqud: string): string => {
  const entry = Object.entries(niqqudMap).find(([, value]) => value === niqqud);
  return entry ? entry[0] : "unknown";
};

export const addDageshToLetter = (letter: string): string => {
  return letter + niqqudMap.dagesh;
};
