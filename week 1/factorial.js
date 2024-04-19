function factorial(n) {
    if(n=== 0){
        return 1
    }
     return (n*factorial(n-1))
}

console.log(factorial(2));

function Binarysearch(arr,target) {
    let left=0
    let right=arr.length-1;
    while (left<=right) {
        let mid=Math.floor((left+right)/2)
        if(target===arr[mid]){
            return mid
        }
        if(target<arr[mid]){
            right=mid-1
        }else{
            left= mid+1
        }
    }
    return -1
    
}
const sorted_list = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25]
const  target=15;
console.log(Binarysearch(sorted_list,target));