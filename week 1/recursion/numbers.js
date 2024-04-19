// function number(n) {
//     if(n==5){
//         console.log(n);
//         return
//     }
//     console.log(n);
//     number(n+1)
// }
// number(1);
function Fibonacci(n) {
  let fib=[0,1]
     for (let i=2;i<n;i++){
       fib[i]= fib[i-1]+fib[i-2];
     } 
     return fib
  }
  console.log(Fibonacci(5)); 

//------------------------------------------------------------------------//

// with recursion---------------------------//
function fibonacci(n) {
    if(n<2){
        return n
    }

  return  fibonacci(n-1) +fibonacci(n-2) 
}
console.log(fibonacci(4)); 