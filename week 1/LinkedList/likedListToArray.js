class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }

    append(value){
        const node=new Node(value);
        node.next=this.head;
        this.head=node
    }
    print(){
       let curr=this.head;
       while (curr) {
        console.log(curr.value);
        curr=curr.next;
       } 
       
    }
   
}
function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        linkedList.append(arr[i]);
    }
    return linkedList;
}

// const list=new LinkedList()
// list.append(1);
// list.append(2);
// list.append(3);
// list.print()
const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
linkedList.print();