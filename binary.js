
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

function binary_search (search,array,min = 0,max =array.length-1) {
  // Your searching code    
  var guess;
  while(min <= max) {
    guess = Math.floor((max + min) / 2);
    if (array[guess] === search) {
        return guess;
    }

    if (array[guess] < search) {    
        return binary_search (search,array, guess+1, max) 
    }
    
    if (array[guess] > search) {      
      return binary_search (search,array,min, guess-1) 
    }
  }
  return -1    
}
  
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)

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
