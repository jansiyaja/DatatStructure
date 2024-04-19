class Stack{
    constructor(){
        this.items=[]
    }

push(element){
    this.items.push(element)
}
 pop(){
    if(!this.items){
        return  "no elemets"
    }
    return this.items.pop()
 }

    print(){
        let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print());
stack.pop()
console.log(stack.print());