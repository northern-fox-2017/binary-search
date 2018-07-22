'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0 ; i < arr.length; i++){
    let j = i;
    while ((arr[j] < arr[j-1]) && (j >= 0) ){
      let swapTemp = arr[j-1];
      arr[j-1] = arr[j];
      arr[j] = swapTemp;
      j--
    }
  }
  return arr
}

function binarySearch (search, array) {

  function midIdx(beginIdx, endIdx){
    return Math.floor( (beginIdx + endIdx)/ 2 ) 
  }
  let midIndex = midIdx(0, array.length - 1);
  if ( array.length === 0 ){
    return -1;
  } else {
    if( array[midIndex] === search){
      return midIndex;
    } else if ( array[midIndex] > search ){
      let leftArr = array.slice(0, midIndex);
      return binarySearch(search, leftArr);
    } else {
      let rightArr = array.slice(midIndex+1, array.length)
      if ( binarySearch(search, rightArr) === -1 ){
        return -1;
      } else {
        return ( midIndex + 1 ) + binarySearch(search, rightArr);
      }
    }
  }
}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
