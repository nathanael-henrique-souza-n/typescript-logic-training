const numbers: number[] = [4, 7, 2, 9, 7, 3, 2, 10];

function findFirstDuplicate(numbers: number[]) {
  let numb: number[] = [];
  for (let indexNumber = 0; indexNumber < numbers.length; indexNumber++) {
    for (
      let indexNumberEmpty = 0;
      indexNumberEmpty < numb.length;
      indexNumberEmpty++
    ) {
      if (numbers[indexNumber] === numb[indexNumberEmpty]) {
        return numb[indexNumberEmpty];
      }
      continue;
    }
    numb.push(numbers[indexNumber]);
  }
  return numb;
}

console.log(findFirstDuplicate(numbers));
