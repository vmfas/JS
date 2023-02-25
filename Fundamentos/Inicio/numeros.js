const peso1 = 1.0
let peso2 = Number('1.9')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

peso2 = Number('2.0')
console.log(Number.isInteger(peso2))

const ava1 = 9.871
const ava2 = 6.871

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2)) //transformando em binário com o número 2 e deixando em branco fica o valor padrão da média
console.log(typeof media)
console.log(typeof Number)
