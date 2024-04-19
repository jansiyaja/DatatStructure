function Factorial(n) {
    let result=1;
    for(let i=2;i<n;i++){
        result=result*i
    }
   return result ;
}
console.log(Factorial(5));
//////////////////////////////

function Factorial(n) {
    if(n===0){
        return 1
    }
    return ( n* Factorial(n-1) ) 
}
console.log(Factorial(5));