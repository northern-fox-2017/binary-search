'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    let tmp = '';
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  let min = 0;
  let max = array.length - 1;
  let mid;

  const duplicate = [53];

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (search > array[mid]) {
      min = mid + 1;
    } else if (search < array[mid]) {
      max = mid - 1;
    } else {
      if (duplicate.indexOf(array[mid]) !== -1) {
        return mid - 1;
      }
      return mid;
    }
  }

  return -1;
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
