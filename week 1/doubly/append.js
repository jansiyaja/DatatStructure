class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
        this.prev=null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null
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
    append(value) {
       
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }
  
    remove(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                break; 
            }
            current = current.next;
        }
    }
    isCircular(){
        if(!this.head){
            return null
        }
        let curr= this.head;
        while(curr.next!==null){
            if(curr.next===this.head){
                return true
            }
            curr=curr.next
        }
        return false
    }
   
    printforward() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
    printRevese() {
        let curr = this.tail;
        while (curr) {
            console.log(curr.value);
            curr = curr.prev;
        }
    }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.append(55)
list.append(65)
list.append(75)

list.printforward();
console.log("second");
list.printRevese();
console.log( list.isCircular());