const nome = 'Rebeca'
const concatenacao = 'Olá, ' + nome + "!"

const template = `
    Olá
    ${nome}"` 
    //usando crase ele interpreta tudo que tiver dentro das crases do jeito que estiver

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUpperCase() //função arrow
console.log(`Ei... ${up('cuidado')}!`)