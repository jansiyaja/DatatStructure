function Fibonacci(n) {
let fib=[0,1]
   for (let i=2;i<n;i++){
     fib[i]= fib[i-1]+fib[i-2];
   } 
   return fib
}
console.log(Fibonacci(5)); 
/////////////////////////////////////////////////////////////
// using recursion
function FibonacciR(n) {
    if (n<2) {
        return n
    }
    return (FibonacciR(n-1)+FibonacciR(n-2))
}
    console.log(FibonacciR(-1)); 
