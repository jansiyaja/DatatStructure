function reverse(string) {
    let stack=[];
    for (let i = 0; i < string.length; i++) {
       stack.push(string.charAt(i));
        
    }
    let str="";
    while(stack.length>0){
        str+=stack.pop()
    }
    return str
}

let str="hloo jan";
//console.log(reverse(str));


function reverseelement(arra) {
    let stack=[];
    for(let i=0;i<arra.length;i++){
        stack.push(arra[i])
    }
    let n=[]
    while (stack.length>0) {
        n+=stack.pop()
    }
    return n
}
let array=[1,2,3,4,5,6];
//console.log(reverseelement(array));



// class Stack{
// constructor(){
//     this.items=[];
//     this.maxStack=[]
//     this.minStack=[]
// }
// push(element) {
//     this.items.push(element);
//     if (this.maxStack.length==0||element>this.maxStack[this.maxStack.length-1]) {
//         this.maxStack.push(element)
//     }
//   }
// display(){
//     let str="";
//     for(let i=0;i<this.items.length;i++){
//         str+=this.items[i]+" "
//     }
//     return str
// }
// getMax(){
//     if (this.maxStack.length==0) 
//     return "stcak is e,mpty";
// return this.maxStack[this.maxStack.length-1]}

// getsum(){
//     let sum=0
//     for (let i = 0; i < this.items.length; i++) {
//        sum = sum+this.items[i];
        
//     }
//     return sum
// }
// }
// const stack=new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(0)
// console.log(stack.display());
// console.log(stack.getMax());
// console.log(stack.getsum());




//stack using linkedLISt

class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
    class Stack{
        constructor(){
        this.pop=null

        }
        push(value){
            const node =new Node(value)
            if(!this.top){
                this.top=node
            }else{
                node.next=this.top;
                this.top=node
            }
        }

        display(){
            let current=this.top;
            let str="";
           while (current) {
            str+=current.value+ " ";
            current=current.next
           }
            return str.trim()
        }
    }
    const stackk= new Stack();
    stackk.push(12)
    stackk.push(42)
    stackk.push(13)
    stackk.push(22)
    console.log( stackk.display());
   
function isvalid(str) {
   let stack=[];
   let stackMap={
    "}":"{",
    "]":"[",
    ")":"("
   } 
for (let i = 0; i< str.length; i++) {
let char=str.charAt(i);

if(char[i]==="["||char[i]==="("||char[i]==="{"){
stack.push(char)
}else{
    if(stack.length===0||stack.pop()!==stackMap[char]){
        return false
    }
}
    }
    return stack.length==0
}
let string="{}";
console.log(isvalid(string));