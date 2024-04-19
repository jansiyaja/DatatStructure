class Node{
    constructor(key,value){
        this.value=value;
        this.key=key;
        this.next=null
    }
}
// Linked list class
class LinkedList {
    constructor() {
        this.table = {};
    }

    // Hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i); 
        }
        return hashValue; 
    }

    insert(key, value) {
        const index = this.hash(key); 
        if (!this.table[index]) {
            this.table[index] = new Node(key, value); 
        } else {
            let current = this.table[index];
            while (current.next !== null) {
                current = current.next; 
            }
            current.next = new Node(key, value); 
        }
    }
    get(key) {
        const index = this.hash(key);
        let current = this.table[index];
        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined; 
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let previous = null;
        while (current !== null) {
            if (current.key === key) {
                if (previous === null) {
                    this.table[index] = current.next; 
                } else {
                    previous.next = current.next; 
                }
                return;
            }
            previous = current;
            current = current.next;
        }
    }
    display() {
        for (const index in this.table) {
            let current = this.table[index];
            let indexStr = index.toString();
            while (current !== null) {
                console.log(`Index: ${indexStr}, Value: ${current.value}`);
                current = current.next;
            }
        }
    }
}


const list=new LinkedList()
list.insert("name","jansiya");
list.insert("mane","calict");

list.display()

console.log(list.get("name"));