function countAboveThreshold(numbers, threshold) {
  let totalNumbersAboveThreshold = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      totalNumbersAboveThreshold++;
    }
  }

  return totalNumbersAboveThreshold;
}

// option 2
// function countAboveThreshold(numbers, threshold) {
//   return numbers.filter((number) => number > threshold).length;
// }

// option 3
// function countAboveThreshold(numbers, threshold) {
//   return numbers.reduce((sum, number) => sum + (number > threshold), 0);
// }
