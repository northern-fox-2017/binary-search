'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }  
  return arr
}
// console.log(ownSort(testArrayGanjil))

function binary_search (search,array) {
  // Your searching code
  var min = 0;
  var max = array.length 
  var guess;
  while(min <= max) {
    guess = Math.floor((max + min) / 2);
    if (array[guess] === search) {
        return guess;
    }

    else if (array[guess] < search) {
        min = guess + 1;
    }
    else {
        max = guess - 1;
    }

  }
  return -1
    
}
  
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
// var arr1 = [1,2,3,4,5]
// var arr2 = [13,19,24,29,32,37,43]
// console.log(binary_search(3, arr1))
// console.log(binary_search(3, arr2))

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
