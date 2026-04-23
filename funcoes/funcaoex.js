/*function mutiplicar(a,b){

    return a * b

}
let resultado = mutiplicar(6,6)
console.log(resultado)*/


/*function saudar(nome,horario){

    console.log(`Boa ${horario}, ${nome}!!!`)
}

/////////////////////////////////exemplos de uso
saudar("Maria", "tarde")
saudar("Jucemar", "manhã")
saudar("Nicolas", "noite")*/

/*function converterParaCelsius(F){
const celsius=(F-32) * 5/9
console.log(`${F} °F equivale a ${celsius.toFixed(1)} °C`)

}
/////////////////////////exemplos de uso
converterParaCelsius (98)*/

/*function converterPila(pila){
const dolar = pila * 0.20
const euro =  pila * 0.17
const bolivar = pila * 95.65

//console.log(`O valor de ${pila} reais equivale a ${dolar} dolares, ${euro.toFixed(2)} euros e ${bolivar.toFixed(2)} bolivar.` )
console.log("Dolar: ", dolar)
console.log("Bolivar: ", bolivar.toFixed(2))
console.log("Euro :", euro.toFixed(2))
}

converterPila(10)*/


///////////////////////////////////////
//Arrow Functions (funcoes de seta =>) : possuem uma sintaxe mais curta

const mutiplicar = (x,y) => x * y
console.log(mutiplicar(4,5))