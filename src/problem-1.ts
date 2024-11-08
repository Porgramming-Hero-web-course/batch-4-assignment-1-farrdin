//? Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
