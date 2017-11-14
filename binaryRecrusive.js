'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  for(var i = 0; i < arr.length ; i++){
  	for(var j = i; j < arr.length; j++){
  		if(arr[i] > arr[j]){
  			var temp = arr[i];
	  		arr[i] = arr[j];
	  		arr[j] = temp;
  		}
  		
  	}
  }
  return arr
}

function binary_search (search, array, min = 0, max = array.length - 1, mid = Math.floor((min + max) / 2), result = 0) {
	debugger
	if(result < array.length){
		if(search === array[mid]){
			return mid;
		}else{
			if(search < array[mid]){
				min = 0;
				max = mid - 1;
				mid = Math.floor((min + max) / 2);
				result += 1;
				return binary_search(search, array, min, max, mid, result);
			}else{
				min = mid + 1;
				max = array.length - 1;
				mid = Math.floor((min + max) / 2);
				result += 1;
				return binary_search(search, array, min, max, mid, result);
			}
		}
		
	}else{
		return -1;
	}
	
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
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