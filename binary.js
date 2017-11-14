'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 10]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let index1 = arr[j]
        let index2 = arr[i]
        arr[i] = index1;
        arr[j] = index2;
      }
    }
  }
  return arr;
}

function binary_search(search, array) {
  // Your searching code

  let nilaiTengah = 0, min = 0, max = array.length - 1;

  while (min <= max) {
    nilaiTengah = Math.floor(min + max / 2);
    if (array[nilaiTengah] === search) {
      return nilaiTengah;
    } else if (search < array[nilaiTengah]) {
      max = nilaiTengah - 1
    } else {
      min = nilaiTengah + 1
    }
  }
  return -1
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
