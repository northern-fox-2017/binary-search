'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  let gelasKosong = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        gelasKosong = arr[i]
        arr[i] = arr[j]
        arr[j] = gelasKosong
      }
    }
  }
  // console.log(arr);
  return arr
}

function binary_search (search, array) {
  let end = array.length
  let start = 0
  let mid = Math.floor((end + start) / 2)

  while(start <= end){
    if(search == array[mid]){
      return mid
    }
    else if(search < array[mid]){
      end = mid -1
      mid = Math.floor((end + start) / 2)
    }
    else if(search > array[mid]){
      start = mid + 1
      mid = Math.floor((end + start) / 2)
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
