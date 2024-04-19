function bubbleSort(arr) {
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length-i;j++){
           if(arr[j]<arr[j-1]){
            temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp
           }
        }
    }
    return arr
}
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", arr);
// console.log("bubbleSort array:", bubbleSort(arr));


function selectionSort(arr) {
    n=arr.length
    for(let i=0;i<n-1;i++){
        let min=i;
        for(j=i+1;j<n;j++){
          if(arr[j]<arr[ min]){
            min=j
          } 
              }

      
    [arr[i],arr[min]]= [arr[min],arr[i]]
            
    }
    return arr
}
const arra = [6, 4, 25, 12, 2, 11, 90];
// console.log("Original array:", arra);
// console.log("selectionSort array:", selectionSort(arra));



function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        let current=arr[i];
        let j=i-1;
        while (j >= 0 && arr[j]>current) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr
}

console.log("Original array:", arra);
console.log("insertionSort array:", insertionSort(arra));


function quickSort(arr) {
  
    if (arr.length <= 1) {
        return arr;
    }

   
    let pivot = arr[0];
    let left = [];
    let right = [];

   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
// console.log("Original array:", arra);
// console.log("quickSort array:", quickSort(arra));

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

                     
const array = [8, 4, 2, 9, 3, 6, 5, 1, 7];
const sortedArr = mergeSort(array);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
