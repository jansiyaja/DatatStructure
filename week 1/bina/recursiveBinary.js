function recursiveBinarySearch(arr,target) {
  return  search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right) {
    if(left>right){
        return  -1
    }
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }
    if(target<arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search(arr,target,mid+1,right)  
    }
    
}

function Binarysearch(arr,target) {
    let left=0;
    let right= arr.length-1;
    while (left<=right) {
         let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        right = mid-1
    }else{
        left=mid+1
    }
}
 return-1
}

const arr=[1,2,3,4,5,6]
const target=2
console.log(recursiveBinarySearch(arr,target));
console.log(Binarysearch(arr,target));