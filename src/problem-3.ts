//? Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sen: string, w: string): number {
  const lowCaseSen = sen.toLowerCase();
  const lowCaseW = w.toLowerCase();

  const sameCount = lowCaseSen.split(" ").filter((x) => x === lowCaseW).length;

  return sameCount;
}
// console.log(countWordOccurrences("I love typescript", "typescript"));
