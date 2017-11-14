'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1 ; i < arr.length ; i++){
  	for (let j = 0; j < i ; j++){
      if(arr[i] < arr[j]) {
        let simpanAngka = arr[i]
        arr[i] = arr[j]
        arr[j] = simpanAngka
      }
  	}
 }
 
  return arr
}

//release 1 with rekursif
function binary_search(search, array, startIndex = 0, end = array.length-1) {
  let midIndex = Math.floor((startIndex + end) / 2);
  let nilai = array[midIndex];

  if (startIndex > end) {
    return -1;
  } else if (nilai > search) {
    return binary_search(search, array, startIndex, midIndex - 1);
  } else if (nilai < search) {
    return binary_search(search, array, midIndex + 1, end);
  } else {
    return midIndex;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(testArrayGanjil)

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
