class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

   prepend(value){
    const node=new Node(value);
    node.next=this.head;
this.head=node
    
   }
   append(value){
    if(!this.head){
     this.prepend(value)
    }else{
        const node=new Node(value);
        let curr=this.head;
        while(curr.next!=null){
            curr=curr.next
        }
        curr.next=node;
        this.size++
    }
   }
 remove(value){
    if(this.head.value=value){
        this.head=this.head.next;
        
    }else{
        let prev=this.head;
        while(prev.value!=value){
            prev=prev.next
        }
        if(prev.next){
            let removenode;
            removenode=prev.next;
            prev.next=removenode.next
            return null
        }
    }
 }
 middle(){
    if(!this.head){
        return "array is empty"
    }
    let fast=this.head;
    let slow=this.head;
    let prev=null
    while(fast && fast.next){
        fast=fast.next.next;
        prev=slow
        slow=slow.next
    }
    prev.next= slow.next
  
 }

   removeIndex(index){
    if(!this.head){
        return "ther is no list"
    }
    if(index===0){
        this.head=this.head.next
    }else{
    let i=0;
    let prev=null;
    let curr=this.head;
    while (curr) {
        if(i===index){
            prev.next=curr.next
        }
        prev=curr;
        curr=curr.next
       i++
    }
   }
}
reverse(){
    let prev=null;
    let next=null;
    let curr=this.head;
    while (curr) {
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next
    } 
    this.head=prev
}
insertValue(value, target) {
    const node = new Node(value);
    let temp = this.head;

    while (temp !== null && temp.value !== target) {
        temp = temp.next;
    }

    if (temp === null) {
        console.log("Target node not found.");
        return;
    }

    node.next = temp.next;
    temp.next = node;
    this.size++;
}



    

      print(){
        let curr=this.head
        while (curr) {
           console.log(curr.value);
           curr=curr.next 
        }
      }
     
     
}

const list=new LinkedList();
list.prepend(40)
list.prepend(30)
list.append(20)
list.append(10)
list.print()
list.remove(30);
 console.log("after remove");
list.print();
console.log("mid",list.middle());
list.print()
// console.log("after reverse");
// list.reverse();
// list.print()
// list.insertValue(33,30)
// list.print()