'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  let hasil = 0
  debugger;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        hasil = arr[j];
        arr[j] = arr[i];
        arr[i] = hasil
      }
    }
  }

  debugger;
  console.log(arr);
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let awal = 0;
  let akhir = array.length-1;
  let midIndex = Math.floor((awal + akhir) / 2)

  while (search !== array[midIndex]) {
    if (midIndex == akhir || midIndex == awal) {
      return -1;
    }else if (search < array[midIndex]) {
      akhir = midIndex -1;
      midIndex =  Math.floor((awal + akhir) / 2)
      debugger;
    }else if (search > array[midIndex]) {
      awal = midIndex + 1;
      midIndex = Math.floor((awal + akhir) / 2)
      debugger;
    }
  }
  debugger;

  return midIndex;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(11, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(10, arrayGanjilSorted))

module.exports = {
  binary_search
}
