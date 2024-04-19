function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
const arr1 = [12, 2, 3, 4, 5];
const target1 = 12;
console.log( linearSearch(arr1, target1));