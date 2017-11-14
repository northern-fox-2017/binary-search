'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          let pindah = arr[i];
          arr[i] = arr[j];
          arr[j] = pindah
        }
      }
    }
  return arr
}
console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));


function binary_search (search, array) {
    let awal = 0;
    let akhir = array.length-1;

    while (awal <= akhir) {
      var tengah = Math.floor((awal + akhir)/2)
      if (search < array[tengah]) {
          akhir = tengah-1
      } else if (search > array[tengah]) {
        awal = tengah+1
      } else {
        return tengah
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

// module.exports = {
//   binary_search
// }
