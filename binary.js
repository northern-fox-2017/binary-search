'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let arrSorted = []
  while(arr.length > 0){
    let smallestNum = arr[0]
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < smallestNum){
        smallestNum = arr[i]
      }
    }
    arrSorted.push(smallestNum)
    arr.splice(arr.indexOf(smallestNum),1)
  }
  arr = arrSorted
  return arr
}

function binary_search (search, array) {
  // Your searching code
  return 0;
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
