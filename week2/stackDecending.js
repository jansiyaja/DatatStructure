class Stack{
    constructor(){
        this.items=[]
    }
    push(elements){
        this.items.push(elements)
    }

    display(){
        let str="";
        for(let i=this.items.length-1;i>=0;i--){
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
console.log(stack.display());