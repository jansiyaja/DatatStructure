function linearSearch(arr,target) {
for (let i = 0; i < arr.length; i++) {
   
      if(arr[i]===target) {

        return i
      } 
    
}

return -1
}
const array=[12,3,4,5,6,7]
const target=3
//console.log(linearSearch(array,target));



function Binarysearch(arr,target) {
    arr.sort((a, b) => a - b); 
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(target === arr[mid]){
            return mid
        }
        if(target<arr[mid]){
            right =mid-1
        }else{
            left =mid+1
        }
    }
    return -1
}

function recursiveBinarySearch(arr,target) {
  return search(arr,target,0,arr.length-1) 
}
function search(arr,target,left,right) {
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }
    if(target1<arr[mid]){
        return search(arr, target,left,mid-1)
    }else{
        return search(arr, target,mid+1,right)   
    }
       
}

const array1=[1,2,3,4,5,7];
const target1=2;
//console.log(Binarysearch(array1,target1));
//console.log(recursiveBinarySearch(array1,target1));



class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    prepend(value){
        const node= new Node(value);
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head;
            this.head=node
        }
    }
    append(value){
        const node= new Node(value)
        if(!this.head){
            this.prepend(value)
        }else{
         let current=this.head;
            while(current.next!=null){
                current=current.next
            }
           current.next=node
           this.size++
        }
    }
   
    reverse(){
        let next=null;
        let prev=null;
        let curr=this.head;
        while (curr) {
         next=curr.next;
         curr.next=prev;
         prev=curr;
         curr=next
    }
    this.head=prev
}
remove(value){
    if(this.head.value===value){
        this.head.next=this.head
    }else{
        let curr=this.head;
        while (curr.next.value!=value) {
            curr=curr.next
        }
        if(curr.next){

        }
    }
}
    print(){
        let current=this.head;
        while (current) {
            console.log(current.value);
            current=current.next
        }
    }
}
const list= new LinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)

list.append(55)
list.print()
console.log("reversed");
list.reverse();
list.print()