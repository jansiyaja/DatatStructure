function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
       let temp=0;
       if(array[j]>array[j+1]){
        temp=array[j+1];
        array[j+1]=array[j];
        array[j]=temp
       }
        
       }
        
    }
    return array
}
let arr = [5, 2, 4, 6, 1, 3];
console.log(bubbleSort(arr));

function selectionSort(array) {
    for (let i = 0; i < array.length-1; i++) {
        let min = i;
         for (let j = i+1; j < array.length; j++) {
           if(array[j]<array[min]){
            min=j
           }
          
         }
        [array[i],array[min]]=[array[min],array[i]]
    }
    return array
}
console.log(selectionSort(arr));

function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        current = array[i];
        let j=i-1
        while (j>=0&& array[j]>current) {
            array[j+1]=array[j];
            j--
        }
        array[j+1]=current
    }
    return array
}
console.log(insertionSort(arr));

function quickSort(arra) {
    if (arra.length <=1) {
        return arra ;
    }
    let pivot=arra[0];
    let left=[];
    let right=[];
    for (let i = 1; i < arra.length; i++) {
       if (arra[i]<pivot) {
        left.push(arra[i])
       } else {
        right.push(arra[i])
       }
        
    }
    return quickSort(left).concat(pivot,quickSort(right))
}
console.log(quickSort(arr));

