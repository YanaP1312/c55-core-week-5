import generateBigArray from "./bigArray.js";

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return target;
    }
  }
  return null;
};

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return null;
};

function measureSearch(searchFn, label, size, target) {
  const arr = generateBigArray(size);

  const timerLabel = `${label}: searching for ${target} in array of ${size}`;

  console.time(timerLabel);
  searchFn(arr, target);
  console.timeEnd(timerLabel);
}

//linearSearch
measureSearch(linearSearch, "Linear Search", 1000, 876);
measureSearch(linearSearch, "Linear Search", 100000, 98345);
measureSearch(linearSearch, "Linear Search", 1000000, 998345);
measureSearch(linearSearch, "Linear Search", 10000000, 8000657);

console.log("---");

//binarySearch
measureSearch(binarySearch, "Binary Search", 1000, 876);
measureSearch(binarySearch, "Binary Search", 100000, 98345);
measureSearch(binarySearch, "Binary Search", 1000000, 998345);
measureSearch(binarySearch, "Binary Search", 10000000, 8000657);
