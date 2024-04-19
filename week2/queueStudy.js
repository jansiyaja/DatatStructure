class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(elements){
      this.items.push(elements)
    }
    dequeue(){
      if (!this.items)
            return "queue is empty"
        
        return this.items.pop()
    }

    display(){
        let str="";
        for (let i = 0; i < this.items.length; i++) {
           str+=this.items[i]+" "
            
        }
        return  str
    }

}

const queue=new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.display());
queue.dequeue()
console.log(queue.display());