class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }
    append(value){
        const node= new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node
        }else{
           node.prev=this.tail;
           node.tail.next=node;
           this.tail=node
           
    }
}
    print(){
        let curr=this.tail;
        while (curr) {
           console.log(curr.value); 
           curr=curr.prev
        }
    }
    
    printf() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

const list=new LinkedList();

list.prepend(12 )
list.prepend(22)
list.prepend(32 )
list.prepend(42 )
list.print()
console.log("diff");
list.printf()

