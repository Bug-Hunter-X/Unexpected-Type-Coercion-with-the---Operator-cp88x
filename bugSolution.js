function foo(a,b){
  a = Number(a);
  b = Number(b);
  return a+b;
}
console.log(foo(2,3)); // Output: 5
console.log(foo(2,"3")); // Output: 5
console.log(foo("2",3)); // Output: 5
console.log(foo("2","3")); // Output: 5