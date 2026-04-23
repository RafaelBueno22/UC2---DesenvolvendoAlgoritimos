// A propriedade length nos diz qual é o tamanho de uma string, incluindo os espaços
/*const nome = "Monkey D. Luffy"
console.log(nome.length)*/

/////////////////////////////////////////////////////////////
//Método: toLowerCase()
//transforma todas as letras da string em minuscula
/*const frase = "O Dia EstaaaaaaaaaaAAaa LINdooo DeMais!!!"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log(fraseMinuscula)*/

////////////////////////////////////////////////////////////
//metodo: toUpperCase()
// deixa tudo maiusculo

/*const frase2 = "o DIAaaa esTa LinDOoooo"
const fraseMaiuscula = frase2.toLocaleUpperCase()
console.log(fraseMaiuscula)

/////////////////////////////////////////
//metodo: trim()
//retira espaços que existem antes e depois de sua string (util em formularios e logins)
const email = "          senaquin@senacrs.com"
console.log(email.trim())
/////////////////////////////////////
const frase3 = ("a força de um guerreiro não vem de vencer sozinho, mas de nunca desistir de lutar pelo que acredita.")
console.log(frase3.includes("guerreiro"))
console.log()*/

/*const frase = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura","chocolate")
console.log(novaFrase)*/

/*const nome = "    Maria Silva   "
console.log(nome.trim())*/


//const nome = "SuperCodador123"
//console.log(nome.length)

/*const frase = "Eu adoro estudar progamação todos os dias"
console.log(frase.includes("ódio"))*/

/*const frase = "jAvAsCrIpT é InCríVeL"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log(fraseMinuscula)*/

/*const frase = "preciso de ajuda urgente"
const fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)*/

/*const frase = " Aprender a programar é divertido                    "
console.log(frase.trim())*/

/*const frase = "Esse filme é muitro ruim, ruim demais!!!"
const novaFrase = frase.replaceAll ("ruim" , "bom")
console.log(novaFrase)*/

/*const fraseSecreto = ("        SeCrEto123           ") 
const frase1 = fraseSecreto.trim()
const frase2 = frase1.toLocaleLowerCase()
const frase3 = frase2.includes("secreto")

console.log(frase2)
console.log(frase3)
console.log(frase2.length)*/

/*const frase = "    kamehameha , genki-dama , kaioken , spirit bomb"
const frase1 = frase.trim()
const frase2 = frase1.toLocaleUpperCase()
const frase3 = frase2.replaceAll("," , "|")

console.log(frase3)
console.log(frase3.includes("SPIRIT BOMB"))
console.log(frase3.length)*/

let heroi = "     naruto      "
let heroi2 = "   deku      "

const remover = heroi.trim()
const remover2 = heroi2.trim()
const minusculo = remover.toLocaleLowerCase()
const maiusculo = remover2.toLocaleUpperCase()
const frase = "Naruto encontra Deku no mundo ninja"
const frase1 = frase.replaceAll("Deku", "Sasuke")
const verificar = frase.includes("Naruto")

console.log(maiusculo)
console.log(minusculo)
console.log(frase1)
console.log(verificar)
