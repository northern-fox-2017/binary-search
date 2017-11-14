'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

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

function binarySearch (search, array, start=0, end = array.length) {
  // Your searching code
  let mid = Math.floor((start + end)/2);

  if (search == array[mid]) {
    return mid
  } else  if (start == end && start == mid) {
    return -1
  } else if (search < array[mid]) {
    end = mid - 1;
    return binarySearch(search, array, start, end);
  } else if (search > array[mid]) {
    start = mid + 1
    return binarySearch(search, array, start ,end)
  }



}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil)
//console.log(testArrayGanjil);

// Driver code
 console.log(binarySearch(8, arrayGenapSorted))
  // console.log(binarySearch(22, arrayGenapSorted))
 // console.log(binarySearch(32, arrayGenapSorted))
// //
 // console.log(binarySearch(50, arrayGanjilSorted))
 // console.log(binarySearch(3, arrayGanjilSorted))
 // console.log(binarySearch(89, arrayGanjilSorted))

 // module.exports = {
 //   binary_search
 // }
