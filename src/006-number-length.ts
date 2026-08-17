const numbers: number[] = [1, 3, 5, 3, 7, 3, 2, 5, 1, 3];

function countOccurrences(numberList: number[], target: number) {
  return numberList.reduce((acc, number) => {
    if (number === target) {
      acc++;
    }
    return acc;
  }, 0);
}

console.log(countOccurrences(numbers, 5));
