const prompt = require("prompt-sync")()

//mostra um menu e pede para o usuario escolher uma opcao
let opcao = Number(prompt("Escolha uma opcao: \n 1 - Ver Saldo  \n 2 - Depositar  \n 3 - Sair  \n Digite:"))

switch(opcao){

    case 1:
        console.log("Seu saldo é de R$ 100🤑🤑")
        break
    case 2:
        console.log("Depósito realizado✅✅")
        break
    case 3:
        console.log("Saindo do sistema👋")   
        break 
    default:
        console.log("Opção inválida😥")       
}