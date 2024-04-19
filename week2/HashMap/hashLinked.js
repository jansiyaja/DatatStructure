class Node{
    constructor(key,value){
        this.value=value;
        this.key=key;
        this.next=null
    }
}

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
        this.table[index] = new Node(key, value); 
    }
get(key){
   const index= this.hash(key);
   return this.table[index] 
}
    display() {
        for (const index in this.table) {
            console.log(`Index: ${index}, Value: ${this.table[index].value}`);
        }
    }
}


const list=new LinkedList()
list.insert("name","jansiya");

list.insert("age",12);

list.display()

console.log(list.get("name"));
