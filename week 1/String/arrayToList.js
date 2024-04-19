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
    const node= new Node(value)
    node.next=this.head;
    this.head=node;
}
print(){
    let curr=this.head;
    while (curr) {
        console.log(curr.value);
        curr=curr.next
    }
}
toArray(){
    const array=[];
    let curr=this.head;
    while(curr){
        array.push(curr.value);
        curr=curr.next
    }
    return array
}
}
funct
const list=new LinkedList()
list.prepend(12)
list.prepend(22)
list.prepend(32)
list.prepend(42)
list .print()
const array =list.toArray();
console.log(array);