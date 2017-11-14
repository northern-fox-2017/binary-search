'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  
  // Your sorting code
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if(arr[i]<arr[j]){
          let temp = arr[i];
          arr[i] = arr[j]
          arr[j]=temp
        }
        
      }
      
      
    }
    return arr;
  
}

function binary_search (search, array) {
  debugger
  // Your searching code
  let awal  = 0;
  let akhir = array.length -1;
  
  while (awal<=akhir) {
    let midIndex = Math.round((awal + akhir)/2)
    if (search < array[midIndex]) {
      akhir = midIndex-1;
    }else if(search > array[midIndex]) {
      awal = midIndex+1;
      
    }else {
      return midIndex;
  
    }
  }
 
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(binary_search(8, arrayGenapSorted)=== 0) //true
console.log(binary_search(8, arrayGanjilSorted)=== -1) //true


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
