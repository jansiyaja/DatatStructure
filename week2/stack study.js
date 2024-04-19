class Stack{
    constructor(){
        this.items=[]
    }
    push(elements){
        this.items.push(elements);
    }
pop(){
    if(this.items.length===0)
{
    return  "this is underflow"
}    this.items.pop()
}
peek(){
    if(this.items.length===0){
        return "empty stack"
    }
    return this.items[this.items.length-1]
}
    display(){
        let str="";
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+" "
        }
        return str
    }
}

const stack=new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()
console.log(stack.peek());

console.log(stack.display());