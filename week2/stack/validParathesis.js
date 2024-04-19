function isvalid(s) {
    let stack=[];
    let Para={
    ")":"(",
    "}":"{",
    "]":"["

    };
    for(let i=0;i<s.length;i++){
      let char =s.charAt(i)
       if (char[i]==="["||char[i]==="{"||char[i]==="(") {
        stack.push(char)
       } else{
        if(stack.length===0 || stack.pop()!==Para[char]){
            return false;
        }
       }
    }
    return stack.length===0
    
}
let s="()";
let m="()]";
console.log(isvalid(s));