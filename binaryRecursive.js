'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]


function ownSort(arr) {
  let result = []
  let i = 1
  while (arr.length > 0) {

    const index = arr.indexOf(i)
    if (index !== -1) {
      result.push(i)
      arr.splice(index, 1)
    } else {
      i++
    }
  }
  return result
}

function binary_search(search, array, minIndex = 0, maxIndex = array.length - 1) {
  if (minIndex <= maxIndex) {
    var midIndex = Math.floor((minIndex + maxIndex) / 2)
    if (array[midIndex] === search) {
      return midIndex
    }
    if (search < array[midIndex]) {
      return binary_search(search, array, minIndex, midIndex - 1)
    } else {
      return binary_search(search, array, midIndex + 1, maxIndex)
    }
  }
  return -1;
}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// Driver code
//console.log(binary_search(3,[1,2,3,4,5,6,7])) // 1
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
