const prompt = require("prompt-sync")()

/*let idade = Number(prompt("Digite sua idade: "))

let resultado = idade>=18 ? "Maior de idade" : "Menor de idade"

console.log(resultado)*/

/*let codigo = Number(prompt("Digite o código: "))
let resultado = codigo === 777 ? "Acesso liberado" : "ALARME ATIVADO"

console.log(resultado)*/


let portalMagico = Number(prompt("Escolha o seu portal: \n 1 - (F) - Floresta  \n 2 - (D) - Deserto  \n 3 - (G) - Gelo \n Digite:"))

switch(portalMagico){
    case 1:
        console.log("Floresta")
        break
    case 2:
        console.log("Deserto")
        break 
    case 3:
        console.log("Gelo")      
        break
    default:
        console.log("Opção invalida")    

}


