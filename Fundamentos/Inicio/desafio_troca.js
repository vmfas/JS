let a = 7;
let b = 94;

let temp = a;

console.log(a);
console.log(b);

a = b;
b = temp;

console.log(a);
console.log(b);

//Da pra fazer assim:

[a, b] = [b, a]
console.log(a);
console.log(b);