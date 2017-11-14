'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let temprorary = 0;
  for(let i = 0; i < arr.length -1; i++){
    while(arr[i] > arr[i+1] && i >=0){
      temprorary = arr[i]
      arr[i]     = arr[i+1]
      arr[i+1]   = temprorary
      i--
    }
  }
  return arr
}

function binary_search(search, array, start = 0, end = array.length) {
  let middle = Math.round((start + end) / 2)

  if(search == array[middle]){
    return middle
  }
  else if (start == middle) {
    return -1
  }

  else if(search < array[middle]){
    end = middle -1
    return binary_search(search,array,start,end)
  }
  else if (search > array[middle]) {
    start = middle + 1
    return binary_search(search,array,start,end)
  }



}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(32, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
// //
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))






















//
// module.exports = {
//   binary_search
// }
