'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  for(var i=0; i<arr.length; i++){
    for(var j=i; j<arr.length; j++){
      if(arr[i] > arr[j]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  var mid = Math.floor(array.length/2);
  console.log(array);
  if(!array[mid]){
    return -1
  }else{
     if(array[mid] === search){
      return mid;
    }else if(search < array[mid]){
      return binary_search(search, array.splice(0, mid));
    }else if(search > array[mid]){
      if(array[mid] !== search){
        return -1;
      }else {
        return mid + binarySearch(search, array.splice(mid, Math.max.apply(Math, array)));
      }
    }
  }
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
