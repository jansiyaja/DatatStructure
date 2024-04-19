class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

const array = linkedList.toArray();
console.log(array);
