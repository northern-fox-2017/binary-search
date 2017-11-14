'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]){
      var result = arr[i];
      arr[i] = arr[j];
      arr[j] = result;
    }
  }
}
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let start = 0;
  let end =  array.length -1;
  while (start <= end){
    let indMid = Math.floor((start + end)/2);
    if ( array[indMid] < search){
      start = indMid + 1;
    }else if (array[indMid] > search){
      end = indMid - 1;
    }else {
      return indMid;
    }
  }return -1;
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

// module.exports = {
//   binary_search
// }
