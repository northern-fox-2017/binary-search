'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
// console.log(Math.min(...testArrayGenap));
function ownSort(arr) {
  for(let i=0;i<arr.length;i++){
    let temp=0;
    for(let j=i;j<arr.length;j++){
      if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]= arr[j]
        arr[j]=temp
      }
    }
  }
  // console.log(arr);
  return arr;
}
// console.log(ownSort(testArrayGenap));



function binary_search (search, array) {

  var firstIndex  = 0,
      lastIndex   = array.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(array[middleIndex] != search && firstIndex < lastIndex)
  {
     if (search < array[middleIndex])
      {
          lastIndex = middleIndex - 1;
      }
    else if (search > array[middleIndex])
      {
          firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }
  if(array[middleIndex] != search){
    return -1
  }else{
    return middleIndex
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log('ini yang genap '+arrayGenapSorted);
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log('ini yang ganjil '+arrayGanjilSorted);
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
