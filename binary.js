'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  let startIndex = 0,
      stopIndex = array.length - 1,
      middle = Math.floor((stopIndex + startIndex) / 2)

  while (array[middle] !== search && startIndex < stopIndex) {
    if (search < array[middle]) {
      stopIndex = middle - 1
    } else if (search > array[middle]) {
      startIndex = middle + 1
    }
    middle = Math.floor((stopIndex + startIndex) / 2)
  }

  return (array[middle] !== search) ? -1 : middle;
}

var arrayGenapSorted = ownSort(testArrayGenap); // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var arrayGanjilSorted = ownSort(testArrayGanjil); // [ 3, 21, 31, 44, 53, 53, 55, 77, 85, 89 ]

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
