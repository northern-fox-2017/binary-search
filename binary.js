'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]
// var test = [1,3,4,6,7,9,5]

function ownSort(arr) {
  // Your sorting code
  // for (var i = 1; i < arr.length; i++) {
  //   let swap = 0
  //   for (var j = 0; j < arr.length; j++) {
  //     if (arr[i] < arr[j] ){
  //       swap = arr[i]
  //       arr[i] = arr[j]
  //       arr[j] = swap
  //     }
  //   }
  // }

  // selection sort
  // cari nilai terkecil lalu lempar ke array paling depan

  // var counter = 0
  // var array = []
  // while (counter < arr.length) {
  //   var smallest = arr[counter]
  //   var index = 0
  //   for (var i = counter; i < arr.length; i++) {
  //     if(arr[i] < smallest){
  //       smallest = arr[i];
  //       index = i
  //     }
  //   }
  //   // console.log(smallest);
  //   array.push(smallest)
  //   arr[index] =  arr[counter] // pengennya langsung manipulasi tapi masih ngaco
  //   // arr[counter] = smallest
  //   // console.log(arr);
  //   counter++
  //
  // }

  // Rekursif


  for (var i = 1; i < arr.length; i++) {
    let swap = 0,counter=0
    // console.log(counter <=i);
    // counter++
    while (counter <= i ) {
      if (arr[i] < arr[counter] ){
        swap = arr[i]
        arr[i] = arr[counter]
        arr[counter] = swap
      }
      counter++
    }
  }

  return arr
}

function binary_search (search, array, start = 0, end = array.length ) {
  // Your searching code

  // var start = 0, end = array.length-1
  // let flag = true
  // let mid = Math.floor((start + end)/ 2)
  // let tengah = array.length / 2

    // while (start <= end) {
    //
    //   if (array[mid] == search){
    //
    //     return mid
    //   }
    //   else if (search < array[mid]){
    //     end = mid - 1
    //     mid = Math.floor((start + end)/2)
    //   }
    //   else if (search > array[mid]){
    //     start = mid + 1
    //     mid = Math.floor((start + end)/2)
    //   }
    //   else {
    //     return mid
    //   }
    //   // else if (mid === end){
    //   //   return -1
    //   // }
    // // }
    // return -1;

// Rekursif

    let mid = Math.floor((start + end) / 2)


    if (array[mid] == search) {
      return mid
    }
    else {
      if (start == end){
        // console.log(mid);
        return -1
      }
      else if (search < array[mid]) {
        end = mid - 1
        // console.log(`${start} ini end ${end}`);
        return binary_search(search,array,start,end)
      }
      else if (search > array[mid]){
        start = mid + 1
        return binary_search(search,array,start,end)
      }
    }
    return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted);
console.log(arrayGenapSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))
// //
// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
