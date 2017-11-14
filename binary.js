'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55,44]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    let swap = 0
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j] ){
        swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  // cari nilai terkecil lalu lempar ke array paling depan
  // var smallest = arr[0]
  //
  // for (var i = 0; i < arr.length; i++) {
  //   if(arr[i] < smallest){
  //       smallest = arr[i];
  //   }

    // console.log(temp);
  // }


  return arr
}

function binary_search (search, array) {
  // Your searching code

  var start = 0, end = array.length-1
  let flag = true
  let mid = Math.floor((start + end)/ 2)
  // let tengah = array.length / 2

    while (start <= end) {

      if (array[mid] == search){

        return mid
      }
      else if (search < array[mid]){
        end = mid - 1
        mid = Math.floor((start + end)/2)
      }
      else if (search > array[mid]){
        start = mid + 1
        mid = Math.floor((start + end)/2)
      }
      else {
        return mid
      }
      // else if (mid === end){
      //   return -1
      // }
    }
    return -1;

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
