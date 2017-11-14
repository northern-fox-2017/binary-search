'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

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

function binary_search (search, array, awal = 0, akhir = array.length-1) {
  // Your searching code
  let start = awal;
  let end = akhir;
  let midIndex = Math.floor((awal + akhir) / 2);

  if (search == array[midIndex]) {
    return midIndex;
  }else {
    if (midIndex == start && midIndex == end) {
      return -1
    }else if (search < array[midIndex]) {
      end = midIndex - 1;
      midIndex =  Math.floor((start + end) / 2)
      return binary_search (search, array, start, end)
      debugger;
    }else if (search > array[midIndex]) {
      start = midIndex + 1;
      midIndex = Math.floor((start + end) / 2)
      return binary_search (search, array, start, end)
      debugger;
    }
  }

  debugger;

}

// awal - akhir - tengah

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(90, arrayGenapSorted))
console.log(binary_search(11, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(10, arrayGanjilSorted))

module.exports = {
  binary_search
}
