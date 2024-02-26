/* Factorial of N numberswithout loop */

const rec =(n, fact=1)=>{
  if(n==0) return 0;
  fact = fact * n;
  n--;
  if(n>0){
    return rec(n, fact);
  }
  return fact;
}

console.log(rec(2));