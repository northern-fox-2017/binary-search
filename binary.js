'use strict'


var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for(let i = 1; i < arr.length; i++){
    for(let j = 0;j < i;j++){
      let swapAi = 0
      let swapAj = 0
      if(arr[i] < arr[j]){
        swapAi = arr[i];
        swapAj = arr[j]
        arr[j] = swapAi;
        arr[i] = swapAj;
      }
    }
  }
  return arr
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


function binary_search (search, array, startIndex = 0, endIndex = array.length) {
  // Your searching code
  // Binary search works on sorted arrays.
  // Binary search begins by comparing the middle element of the array with the target value.
  // If the target value matches the middle element, its position in the array is returned.
  // If the target value is less than or greater than the middle element,
  // the search continues in the lower or upper half of the array, respectively,
  // eliminating the other half from consideration
  var midIndex = Math.floor((startIndex + endIndex) / 2);
  // console.log(midIndex)

  if(search == array[midIndex]){
    return midIndex
  }
  else{
    if(startIndex == endIndex){
      return -1
    }
    if(search > array[midIndex]){
      startIndex = midIndex + 1;
      return binary_search(search, array, startIndex, endIndex)
    }
    if(search < array[midIndex]){
      endIndex = midIndex - 1;
      return binary_search(search, array, startIndex, endIndex)
    }
  }
}


// Driver code
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
