class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size=0
    }
    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
    }
append(value){
    const node=new Node(value);
    if(!this.head){
        this.head=node
    }else{
        let curr=this.head;
        while(curr.next!=null){
            curr=curr.next;
        }
        curr.next=node;
        this.size++
    }
}
remove(value){
    if(this.head.value===value){
        this.head.next=this.head
    }else{
let curr=this.head;
while(curr.next.value!=value){
    curr=curr.next;
}
    if(curr.next){
    let removeNode;
    removeNode=curr.next;
    curr.next=removeNode.next;
    this.size--
return value
} 
    }
}
removee(index) {
    if (!this.head) {
        return "The list is empty";
    }

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let i = 0;
    let prev = null;
    let current = this.head;

    while (current) {
        if (i === index) {
            prev.next = current.next;
            return;
        }
        prev = current;
        current = current.next;
        i++;
    }

    return "Invalid index";
}
insert(index, value) {
    const node = new Node(value);
    if (index < 0) {
        return "index must be positive";
    }
    if (index === 0) {
        this.prepend(value);
    } else {
        let curr = this.head;
        let prev = null;
        let count = 0;

        while (curr !== null && count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        if (count < index) {
            return "index out of range";
        }

        node.next = curr;
        prev.next = node;
        this.size++;
    }
}


insertValue(value, target) {
    const node = new Node(value);
    let temp = this.head;

    while ( temp.value !== target) {
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

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
}



const list = new LinkedList();
list.prepend(40);
list.prepend(30);
list.prepend(20);
list.append(50);
//ist.insertValue(33, 20);
list.print();
console.log("log insert");
list.insert(2,10);
list.print()