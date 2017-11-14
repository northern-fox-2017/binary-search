'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        var swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  console.log(array);
  var minIdx = 0;
  var maxIdx = array.length - 1;

  while(minIdx <= maxIdx){
    var midIdx = Math.round((minIdx+maxIdx)/2);
    if(search < array[midIdx]){
      maxIdx = midIdx - 1;
    } else if(search > array[midIdx]){
      minIdx = midIdx + 1;
    } else {
      return midIdx;
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
