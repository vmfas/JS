const escola = "Cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //fica em branco pq n tem uma sexta letra (começa a contar do 0)

console.log(escola.charCodeAt(3)) //mostra o valor de 3 na tabela unicode
console.log(escola.indexOf(3))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola ' .concat(escola).concat("!")) //poderia trocar o concat pelo +
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))