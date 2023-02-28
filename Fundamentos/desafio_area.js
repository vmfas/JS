// PI = 3.141592
// PI * raio * raio = área de uma circunferência
// Da pra usar o valor de PI do próprio JS usando Math.PI
// let area = Math.PI * raio * raio;

const PI = 3.141592;
let raio = 10;
let area = PI * raio * raio;

console.log("PI: " + PI + " Raio: " + raio)
console.log("O valor da área é: " + area)

let area2 = Math.PI * raio * raio;
console.log("PI: " + Math.PI + " Raio: " + raio)
console.log("O valor da área é: " + area2)