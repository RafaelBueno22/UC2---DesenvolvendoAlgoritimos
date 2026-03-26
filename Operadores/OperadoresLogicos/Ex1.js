/* Operador E (tudo deve ser verdadeiro)
represantamos com : && */

/* Operador OU (Uma condicao sendo verdadeira ja basta)
represantamos com : || */

/* Operador NAO (inverte o valor)
representamos com : ! */

/*const idade = 44
const temAssinatura = false


const podeAcessar = idade >= 18 && temAssinatura
console.log(podeAcessar) */



/*const idade = 19
const documentoValido = true
const podeComprar = idade >= 18 && documentoValido

console.log(podeComprar) */


/*const gastou = 100
const clienteVip = false
const cupomValido = gastou >100 || clienteVip

console.log(cupomValido)*/

/*const idade = 61
const temDeficiencia = false
const podeEstacionar = idade >= 60 || temDeficiencia

console.log(podeEstacionar) */

/*const temControle = false
const temConsole = true
const podeJogar= temControle || temConsole

console.log(podeJogar)*/

//const aprovado = true
//const reprovado
const NF = 5
const NR = 9
const T1 = 7
const T2 = 6
const T3 = 6

//const trabalho = (T1 + T2 + T3) /3 

const aprovado = NF >7 || (T1 >=6 && T2 >=6 ) && NR >=8

console.log(aprovado)

