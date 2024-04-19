 class Node{
    constructor(value){
        this.value=value;
        this.next= null;
    }
 }
 class LinkedLista{
    constructor(){
        this.head= null;
        this.size=0
    }
    
 isEmpty(){
  return this.size==0
 }
prepend(value){
    const node= new Node(value);
    node.next= this.head;
    this.head= node
}
append(value){
    const node= new Node(value)
        if(this.head===null){
            this.head= node
          }else{
            let curr=this.head;
            while (curr.next!= null) {
                curr=curr.next
            }
            curr.next =node
          }
}
print(){
    let current= this.head;
    while (current) {
        console.log(current.value);
        current=current.next;
    }
}
 }
 const list= new LinkedLista();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.prepend(40);
list.append(50);
list.print()


