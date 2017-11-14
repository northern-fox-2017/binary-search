'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  var tampungPindahan = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i]<arr[j]) {
        tampungPindahan = arr[i];
        arr[i] = arr[j];
        arr[j] = tampungPindahan;
      }
    }
  }
  return arr
}

function binary_search (search, array, startIndex=0, stopIndex=array.length-1, midIndex) {
  //var midIndex = Math.floor((startIndex+stopIndex)/2);
    midIndex = Math.floor((startIndex+stopIndex)/2);
    debugger;
    if (array[midIndex]==search) {
      return midIndex;
    }
    else {
      if (array[midIndex]!=search && midIndex == startIndex && midIndex == stopIndex) {
        return -1;
      }
      else if (array[midIndex]< search) {
        startIndex = midIndex;
        return binary_search(search, array, startIndex, stopIndex, midIndex)
      }
      else if (array[midIndex]> search) {
        stopIndex = midIndex-1;
        return binary_search(search, array, startIndex, stopIndex, midIndex)
      }
    }

    // return (array[midIndex]==search)? midIndex : -1;
    // else if (a) {
    //
    // }
}

// function binary_search (search, array) {
//   var result = -1;
//   var startIndex = 0;
//   var stopIndex = array.length-1;
//   var midIndex = Math.floor((startIndex+stopIndex)/2);
//   while (search != array[midIndex] && startIndex < stopIndex) {
//     if (array[midIndex]< search) {
//       startIndex = midIndex;
//     }
//     else if (array[midIndex]> search) {
//       stopIndex = midIndex-1;
//     }
//     midIndex = Math.floor((startIndex+stopIndex)/2);
//   }
//   return (array[midIndex]==search)? midIndex : -1;
// }

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
 console.log(binary_search(8, arrayGenapSorted))
 console.log(binary_search(10, arrayGenapSorted))
 console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(22, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
