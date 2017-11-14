'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j] > arr[j+1]) {
      var sort = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = sort
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  // console.log(array);
  let awal = 0;
  let akhir = array.length-1;
  let middle = Math.floor((awal + akhir) /2);

  while(search !== array[middle]) {
    if(search >= array[middle]) {
      awal = middle+1;
      akhir = array.length-1;
      middle = Math.floor((awal + akhir) /2);
    }
    if(search <= array[middle]) {
      awal = 0;
      akhir = middle -1;
      middle = Math.floor((awal + akhir) /2);
    } else {
      return -1
    }
  }
  return middle;
}

// console.log(akhir);
// console.log(middle);

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

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
