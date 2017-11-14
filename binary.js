'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        let angkaSimpanSementara = arr[i]
        arr[i]=arr[j]
        arr[j]=angkaSimpanSementara
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  let startIndex = 0
  let midIndex = Math.floor(array.length/2)+1
  let endIndex = array.length-1


  let count = 0
  while(count <= array.length){
    if(search == array[midIndex]){
      return midIndex
    }
    if(search < array[midIndex]){
      //startIndex = 0
      endIndex = midIndex
      midIndex = Math.floor(endIndex/2)
    }
    if(search > array[midIndex]){
      startIndex = midIndex
      midIndex = Math.floor((startIndex + endIndex) / 2)+1
    }
    count++
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(testArrayGanjil);

// Driver code
 console.log(binarySearch(90, arrayGenapSorted))
 console.log(binarySearch(22, arrayGenapSorted))
 console.log(binarySearch(32, arrayGenapSorted))
//
 console.log(binarySearch(50, arrayGanjilSorted))
 console.log(binarySearch(3, arrayGanjilSorted))
 console.log(binarySearch(89, arrayGanjilSorted))

 // module.exports = {
 //   binary_search
 // }
