'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  
  for(var i = 1; i < arr.length; i++){
	  for(var j = 0; j < i; j++){
		  if(arr[j] > arr[i]){
		  var tampung = arr[i]
		      arr[i] = arr[j]
			  arr[j] = tampung
		  }
	  }
  }
  return arr
}

console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))


function binary_search(search, array) {
  // Your searching code
  var awal = 0
  var akhir = array.length-1
  
  while(awal <= akhir){
	var midIndex = Math.floor((awal + akhir)/2)  
  if(search < array[midIndex]){
	  akhir = midIndex-1
  } else if(search > array[midIndex]){
	  awal = midIndex+1
  } else {
	  return midIndex
  }
	  
  }

  return -1;
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

module.exports = {
  binary_search
}


/*
1.buat perulangan while 
*/