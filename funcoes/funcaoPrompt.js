const prompt = require ('prompt-sync')({sigint: true}) 
/*//funcao simples para cumprimentar o usuario
function cumprimentarUsuario(){
//pede o nome do usuario
const nome = prompt('Digite seu nome cara: ')
 
//mostra uma saudação personalizada
console.log(`Olá, ${nome}!!! Seja bem-vindo(a) a turma TDS261T! `)


}
cumprimentarUsuario()*/

/*function calcularEimprimir(){


    const a = Number(prompt("Digite o primiero número: "))
    const b = Number(prompt("Digite o segundo número: "))

    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a / b
    modulo = a%b
    console.log( "Resultados: ")

    console.log( "Soma: ", soma)
      console.log("Subtração: ", subtracao)
      console.log("Multiplicação: ", multiplicacao)
      console.log("Divisão: ", divisao)
      console.log("Módulo: ", modulo)
}
calcularEimprimir()*/

/*function poderImprimir(){

const poder = prompt('Qual seu superpoder favorito? ')
console.log(`Uau! Ser capaz de ${poder} seria incrível!`)

}
poderImprimir()*/

function criarApelido(){
const nome = prompt("Qual o seu nome? ")
const animal = prompt("Escolha um animal: ")
console.log(`Seu novo apelido é: ${nome } ${animal}`)


}
criarApelido()