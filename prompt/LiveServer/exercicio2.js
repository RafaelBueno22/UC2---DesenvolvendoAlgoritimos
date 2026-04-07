

let ingrediente1 = prompt ("Voçê está fazendo uma poção mágica. Escolha o seu primeiro ingrediente:")
let ingrediente2 = prompt ("Escolha seu segundo ingrediente:")

let soma1 = prompt("Quantas gotas você irá utilizar do seu primeiro ingrediente " + ingrediente1 + "?")
let soma2 = prompt ("Quantas gotas você irá utilizar do seu segundo ingrediente " + ingrediente2 + "?")

soma1 = Number(soma1)
soma2 = Number(soma2)

let totalSoma = soma1 + soma2

alert("você irá utilizar " + ingrediente1 + " e " + ingrediente2 + " assim terá " + totalSoma + " gotas em sua poção mágica.")