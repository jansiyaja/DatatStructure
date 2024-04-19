class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
dequeue(){
    if(!this.items){
        return "this.is empty"
    }
    this.items.shift()
}
    print(){
        let str=" ";
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+" "
        }
        return str
    }
}
const queue= new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.print());
queue.dequeue();
console.log(queue.print());