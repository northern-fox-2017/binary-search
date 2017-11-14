'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]
var arrayGenapSorted = ownSort(testArrayGenap)
// // [ 8 , 10, 10, 18, 22, 22, 32, 40, 90 ]
var arrayGanjilSorted = ownSort(testArrayGanjil)
// // [ 3, 21, 31, 44, 53, 53, 55, 77, 85, 89 ]
//
function ownSort(arr) {
  let hasil = 0;

  for(let i = 0 ; i < arr.length ; i++) {
    for(let j = 0 ; j < i ; j++) {
      if(arr[i] < arr[j]) {
        hasil  = arr[i];
        arr[i] = arr[j];
        arr[j] = hasil;
      }
    }
  }
  return arr
}

// REKURSIF (MASIH GA NGERTI KAK)

function binary_search (search, array, awal = 0, akhir = array.length) {
  let mid = Math.floor((awal + akhir) / 2);

  if(awal > akhir) {
    return -1;
  } else if(search === array[mid]) {
      return mid;
  } else if(search < array[mid]) {
      return binary_search(search, array, awal, akhir = mid - 1);
  } else if(search > array[mid]) {
      return binary_search(search, array, awal = mid + 1, akhir);
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
// // [ 8 , 10, 10, 18, 22, 22, 32, 40, 90 ]
var arrayGanjilSorted = ownSort(testArrayGanjil)
// // [ 3, 21, 31, 44, 53, 53, 55, 77, 85, 89 ]
//
// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
// //
module.exports = {
  binary_search
}
