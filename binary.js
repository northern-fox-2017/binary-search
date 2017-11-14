'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

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


function binary_search (search, array, start = 0, end = array.length) {
    let mid = Math.floor((start+end)/2)
    // console.log('start' + start);
    // console.log('mid' + mid);
    // console.log('end' + end);
    if (array[mid] == search){
      return mid
    } else if (start == mid) {
      return -1
    } else if (array[mid] > search){
      end = mid-1
      return binary_search(search, array, start, end)
    } else if (array[mid] < search){
      start = mid+1
      return binary_search(search, array, start, end)
    }
}

// function binary_search (search, array) {
//   let start = 0
//   let end = array.length
//   while(start <= end){
//     let mid = Math.floor((start+end)/2)
//     if(array[mid] == search){
//       return mid
//     } else if (array[mid] > search){
//       end = mid-1
//     } else if (array[mid] < search){
//       start = mid+1
//     }
//   }
//   return -1;
// }

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
