class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
 prepend(value){
    const node=new Node(value)
node.next=this.head;
this.head=node
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
    print(){
        let curr=this.head;
        while (curr) {
            console.log(curr.value);
            curr=curr.next;
        }
    }
}
const list= new LinkedList();
list.prepend(42)
list.prepend(32)
list.prepend(22)
list.prepend(12)
list.print()
console.log("reversed");
list.reverse()
list.print()