'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
     for (var j = 0; j < i; j++) {
       if(arr[i] < arr[j]){
         var bantuPindah = arr[i];
         arr[i] = arr[j];
         arr[j] = bantuPindah;
       }
     }
  }
 return arr;
}
console.log(ownSort(testArrayGanjil));
console.log(ownSort(testArrayGenap));

function binary_search (search, array) {
  var startIndex = 0;
  var endIndex = array.length-1;
  while(startIndex <= endIndex){
    var midIndex = Math.floor((startIndex+endIndex)/2);
    if(search > array[midIndex]){
      startIndex = midIndex+1;
    } else if(search < array[midIndex]){
      endIndex = midIndex-1;
    } else if(search == array[midIndex]){
      return midIndex;
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(10, arrayGenapSorted)) // 1
console.log(binary_search(33, arrayGenapSorted)) // -1
console.log(binary_search(53, arrayGanjilSorted)) // 4
console.log(binary_search(3, arrayGanjilSorted)) // 0
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
