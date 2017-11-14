'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  let tempNum;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        tempNum = arr[j];
        arr[j] = arr[i];
        arr[i] = tempNum;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let startIdx = 0;
  let endIdx = array.length-1;

  while(startIdx <= endIdx) {
    let midIndex = Math.floor((startIdx + endIdx) / 2);
    if(search > array[midIndex]) {
      startIdx = midIndex + 1;
    } else if(search < array[midIndex]) {
      endIdx = midIndex - 1;
    } else {
      return midIndex;
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
