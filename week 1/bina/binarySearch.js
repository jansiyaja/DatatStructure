
function Binarysearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
   
    
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2); 
        if (arr[middleIndex] === target ) {
          return middleIndex
        }
      else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
           leftIndex = middleIndex + 1;
        }
    }
    
    return -1;
}

const arr1 = [1,1,1,2,2,3,4];
const target1 = 1;
console.log(Binarysearch(arr1, target1)); 

