class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor()
{
    this.head= null
}
prepend(value){
    const node=new Node(value);
    node.next=this.head;
    this.head=node
}
print(){
    let curr=this.head;
    while (curr) {
        console.log(curr.value);
        curr=curr.next
    }
}
}

const list= new LinkedList();
list.prepend(15)
list.prepend(25)
list.prepend(35)
list.prepend(55)
list.print()