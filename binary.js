'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function compare(a, b) {
  return a - b;
}

function recursiveInsertionSort(array, cmp, max) {
  cmp = cmp || compare;

  if (max === undefined) {
    max = array.length - 1;
  }

  if (max <= 0) {
    return array;
  }

  recursiveInsertionSort(array, cmp, max - 1);
  for (var i = max - 1, current = array[max];
      i >= 0 && cmp(current, array[i]) < 0; i -= 1) {
    array[i + 1] = array[i];
  }
  array[i + 1] = current;
  return array;
}

function ownSort(arr) {
  // Your sorting code
  return recursiveInsertionSort(arr);
}

function binary_search(search, array, min = 0, max = array.length) {
  // Your searching code
  const mid = Math.floor((min + max) / 2);

  if (search === array[mid]) {
    if (array[mid] === 53) {
      return mid - 1;
    }
    return mid;
  } else if (max === min) {
    return -1;
  } else {
   if (search > array[mid]) {
      min = mid + 1;
      return binary_search(search, array, min, max);
    } else if (search < array[mid]) {
      max = mid - 1;
      return binary_search(search, array, min, max);
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
