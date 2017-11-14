'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let result;
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

function binary_search (search, array) {
  // Your searching code
  let startIndex = 0;
  let end = array.length;
  let midIndex = Math.floor((startIndex+end)/2);
 
  while (search !== array[midIndex]){
  	if (search >= array[midIndex]){
  		startIndex = midIndex+1;
  		end = array.length;
  		midIndex = Math.floor((startIndex+end)/2);
  	}
  	if (search <= array[midIndex]){
  		startIndex = 0;
  		end = midIndex-1;
  		midIndex = Math.floor((startIndex+end)/2);
  	}else {
	  	return -1
	  }  	
  }
  return midIndex;
}

var arrayGenapSorted = ownSort(testArrayGenap)
// console.log(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(testArrayGanjil)

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
