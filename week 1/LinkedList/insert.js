class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    

    
    removee(index){
        if(!this.head){
            return "this is empty"
        }
        let i = 0;
        let temp = this.head
        let prev ;
        while(temp){
            if(index==0){
                this.head = temp.next
                return
            }else if(index==i){
                prev.next = prev.next.next
                return
            }
            i++
            prev = temp
            temp = temp.next
        }
        return "invalid Index"

    }
removeValue(value){
if(this.head.value ===value){
    
    this.head=this.head.next;
    this.size--;
    return

}else{
    let prev=this.head
    while(prev.next && prev.next.value!=value){
        prev= prev.next
    }
    if(prev.next){
        const removeNode=prev.next;
        prev.next=removeNode.next;
        this.size--;
        return value
    }
    return null
}
}
reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}
search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.value === value) {
            return index;
        }
        current = current.next;
        index++;
    }
    return -1; 
}
    prepend(value){
        const node= new Node(value);
        node.next=this.head;
        this.head=node;
    }

    middle(){
        let fast=this.head;
        let slow=this.head;
        while(fast&&fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow.value
    }
    print(){
        let current=this.head;
        while (current) {
           console.log(current.value);
            current=current.next
        }
    }


}
const list= new LinkedList()
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.prepend(0)

list.print()
console.log( "mid",list.middle());
console.log("Search for value 55:", list.search(55)); 