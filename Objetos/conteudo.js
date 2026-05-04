//============================================
//                 OBJETOS
//============================================
// Definição:
// Um objeto é uma coleção de "chaves" e "valores" (propriedades).
// É a forma de organizar informações relacionadas dentro de única variável.


// Exemplo básico de objeto:
/*let pessoa = {
    nome: "Romario",
    idade: 56,
    profissao: "Corredor",
    gostaCoxinha: false,
    cidade: "São Leopoldo",
    hobbies: ['correr', 'escrever', 'criticar a sociedade da coxinha', 'ler', 'jogar mario kart']
}
        // console.log(pessoa)

//=======================================
// ACESSANDO PROPRIEDADES DE UM OBJETO    
//=======================================

// Podemos acessar os valores de 2 formas:
// 1. Usando a notação de ponto:
console.log("Nome da pessoa: ", pessoa.nome)
console.log("Idade da pessoa: ", pessoa.idade)

// 2. Usando colchetes:

console.log("Profissão da pessoa: ", pessoa)
//3. Alternando uma propriedade já existente:
pessoa.profissao = "Desenvolvedor de Sistemas"
console.log("Objeto atualizado!")*/
//exercicio1

/*let filme = {
    direcao: "Michel Gondry",
    nome: "Brilho Eterno de uma Mente sem Lembranças",
    anoLancamento:  2004,
    elenco: ['Jim Carrey', 'Kate Winslet', 'Kirsten Dunst', 'Elijah Wood', 'Mark Ruffalo', 'Tom Wilkinson'],
    jaAssistiu: true

}
console.log("A direção do filme é feita pelo:", filme.direcao)
console.log("O nome do filme é:", filme.nome)
console.log("O ano de lançamento do filme foi em:", filme["anoLancamento"])
console.log("O elenco do filme tem a participação de:", filme["elenco"])
console.log("Você ja assistiu este filme?", filme["jaAssistiu"])*/

//exercicio2

/*let eu = {
    nome: "Rafael",
    idade: 18, 
    livros: ['A Metarmofose', 'Noites Brancas', 'Imagens Estranhas', 'Suicidas'],
    filmes: ['Brilho Eterno de uma Mente sem Lembranças', 'A Sociedade dos Poetas Mortos', 'Seven', 'Saga Invocação do Mal'],
    series: ['Brooklyn nine-nine', 'Lucifer', 'The Rookie', 'The Bear', 'Dark'],
    time:  "Grêmio",
    hobbies: ['Ler', 'Escutar música', 'Tocar violão', 'Academia', 'Dormir']

}
    console.log(eu)*/


/*let jogador ={
    nome:"Vitor Vinicius",
    pontos: 20,
    time: "Dragões"
}
console.log(jogador)

console.log("Nome do jogador: " , jogador.nome )
console.log("pontos do jogador: " , jogador.pontos)
console.log(`O jogador ${jogador.nome} do ${jogador.time} marcor ${jogador.pontos}` )

let musica = {
    titulo:"Pintinho Amarelinho",
    artista: "Galinha pintadinha",
    curtidas: 500,
}
console.log(musica)
console.log("Titulo alterado para, Brilha brilha estrelinha ", musica.titulo )*/

/*let perfil = {
    username: "dev_jovem",
    seguidores: 120

}
perfil.verificado = false
perfil.seguidores = 200

   //console.log(`O perfil ${perfil.username} tem ${perfil.seguidores} seguidores e verificado: ${perfil.verificado}`)
console.log("O perfil", perfil.username," tem ", perfil.seguidores, "seguidores e verificado: ", perfil.verificado) */

/*let carro = {
    marca: "Porsche",
    modelo: 911, 
    modelo: 2023,
    //metodo acelerar
    acelerar: function(){
        console.log("O carro está acelerando! vrum vrumm")
    },
    //metodo buzinar
    buzinar: function(){
        console.log("BIBIBIIBIBIBIBIBIBIBIBBIB!!!")

    }

}
console.log(carro.marca)
carro.acelerar()
carro.buzinar()*/
 

/*let celular = {
    marca: "Sansung",
    modelo: "S24 Plus",
    armazenamento: "2Tb",

    ligar: function(){
        console.log("O celular está ligado!!")
    },
    tirarFoto: function(){
        console.log("Clique! Foto tirada!")
    }

}
    console.log(celular.marca," ",  celular.modelo," ", celular.armazenamento)
    celular.ligar()
    celular.tirarFoto()*/
 
    /*let cachorro = {
        nome: "Jurandir",
        idade: "5 anos",
        raca: "Vira-lata",
        
        latir: function(){
            console.log("AUAU")
        }
    }
    console.log(cachorro)
    cachorro.latir()*/

    /*let jogo = {
        nome: "Mario Kart",
        plataforma: "Mobile e PC",
        anoLancamento: 2002,

        jogar: function(){
            console.log("Você começou a jogar!")
        },

        resumir: function(){
            console.log("O jogo", jogo.nome, "foi lançado em", jogo.anoLancamento, "para", jogo.plataforma, ".")
        }


    }
    jogo.jogar()
    jogo.resumir()*/


    const donoDoPet = {
        nome: "Vitor Hugo",

        pet: {
            nomeDoPet: "Lua",
            raca: "Branca e Preto",
            idade: 1

        }

    }
    console.log(donoDoPet.pet.nomeDoPet)