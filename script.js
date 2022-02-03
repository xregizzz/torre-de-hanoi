let disco = 0
let jogadas = 0
let discosReset = 0 

let main = document.getElementById("main")
main.addEventListener("click", selecionarDisco)
main.addEventListener("click", receberDisco)

function criarElementosNivelFacil(){
    const section = document.createElement("section")   

    const divTorre1 = document.createElement("div")
    const divTorre2 = document.createElement("div")
    const divTorre3 = document.createElement("div")

    const divDisco2 = document.createElement("div")
    const divDisco3 = document.createElement("div")
    const divDisco4 = document.createElement("div")
    
    section.classList.add("torres")

    divTorre1.classList.add("torre")
    divTorre1.id = "torre1"
    divTorre2.classList.add("torre")
    divTorre2.id = "torre2"
    divTorre3.classList.add("torre")
    divTorre3.id = "torre3"

    divDisco2.classList.add("disco")
    divDisco2.id = "disco2"
    divDisco3.classList.add("disco")
    divDisco3.id = "disco3"
    divDisco4.classList.add("disco")
    divDisco4.id = "disco4"

    divTorre1.appendChild(divDisco2)
    divTorre1.appendChild(divDisco3)
    divTorre1.appendChild(divDisco4)

    section.appendChild(divTorre1)
    section.appendChild(divTorre2)
    section.appendChild(divTorre3)

    return section
}

function criarElementosNivelMedio(){
    const section = document.createElement("section")

    const divTorre1 = document.createElement("div")
    const divTorre2 = document.createElement("div")
    const divTorre3 = document.createElement("div")

    const divDisco1 = document.createElement("div")
    const divDisco2 = document.createElement("div")
    const divDisco3 = document.createElement("div")
    const divDisco4 = document.createElement("div")
    
    section.classList.add("torres")

    divTorre1.classList.add("torre")
    divTorre1.id = "torre1"
    divTorre2.classList.add("torre")
    divTorre2.id = "torre2"
    divTorre3.classList.add("torre")
    divTorre3.id = "torre3"

    divDisco1.classList.add("disco")
    divDisco1.id = "disco1"
    divDisco2.classList.add("disco")
    divDisco2.id = "disco2"
    divDisco3.classList.add("disco")
    divDisco3.id = "disco3"
    divDisco4.classList.add("disco")
    divDisco4.id = "disco4"

    divTorre1.appendChild(divDisco1)
    divTorre1.appendChild(divDisco2)
    divTorre1.appendChild(divDisco3)
    divTorre1.appendChild(divDisco4)

    section.appendChild(divTorre1)
    section.appendChild(divTorre2)
    section.appendChild(divTorre3)

    return section
}

function criarElementosNivelDificil(){
    const section = document.createElement("section")

    const divTorre1 = document.createElement("div")
    const divTorre2 = document.createElement("div")
    const divTorre3 = document.createElement("div")

    const divDisco0 = document.createElement("div")
    const divDisco1 = document.createElement("div")
    const divDisco2 = document.createElement("div")
    const divDisco3 = document.createElement("div")
    const divDisco4 = document.createElement("div")
    
    section.classList.add("torres")

    divTorre1.classList.add("torre")
    divTorre1.id = "torre1"
    divTorre2.classList.add("torre")
    divTorre2.id = "torre2"
    divTorre3.classList.add("torre")
    divTorre3.id = "torre3"

    divDisco0.classList.add("disco")
    divDisco0.id = "disco0"
    divDisco1.classList.add("disco")
    divDisco1.id = "disco1"
    divDisco2.classList.add("disco")
    divDisco2.id = "disco2"
    divDisco3.classList.add("disco")
    divDisco3.id = "disco3"
    divDisco4.classList.add("disco")
    divDisco4.id = "disco4"

    divTorre1.appendChild(divDisco0)
    divTorre1.appendChild(divDisco1)
    divTorre1.appendChild(divDisco2)
    divTorre1.appendChild(divDisco3)
    divTorre1.appendChild(divDisco4)

    section.appendChild(divTorre1)
    section.appendChild(divTorre2)
    section.appendChild(divTorre3)

    return section
}

const botaoReset = document.getElementById("reset")
botaoReset.addEventListener("click", resetarJogo)

const botaoNivel1 = document.getElementById("nivel1")
botaoNivel1.addEventListener("click", listarNivelFacil)

const botaoNivel2 = document.getElementById("nivel2")
botaoNivel2.addEventListener("click", listarNivelMedio)

const botaoNivel3 = document.getElementById("nivel3")
botaoNivel3.addEventListener("click", listarNivelDificil)

main.appendChild(criarElementosNivelFacil())
discosReset = document.querySelectorAll(".disco") 

let contador = document.getElementById("contador")
contador.innerText = jogadas

let torres = document.getElementsByClassName("torre")

function selecionarDisco(event){
    const evento = event.target
    if(evento.className == "disco"){
        disco = event.target.parentElement.lastElementChild
    }       
}

function receberDisco(event, discoAtual){
    const evento = event.target

    if(evento.className == "torre"){
        discoAtual = event.target.lastElementChild   
        if(discoAtual == null){
            event.target.appendChild(disco)
            contarJogadas()
        }else if(discoAtual.clientWidth > disco.clientWidth){
            event.target.appendChild(disco)
            contarJogadas()
            if(verificaVencerdor(torres[1].childElementCount) || verificaVencerdor(torres[2].childElementCount)){
               setTimeout(function(){
                   window.alert("GANHOU MIZERAVI")
                }, 100)
                setTimeout(function(){
                    resetarJogo()
                 }, 100)
            }
        }
    }
    
}

function contarJogadas(){
    jogadas++
    contador.innerText = jogadas
}

function resetarJogo(){
    let primeiraTorre = document.getElementById("torre1")
    discosReset.forEach(elemento => primeiraTorre.appendChild(elemento))
    torres = document.querySelectorAll(".torre")
    contador.innerText = 0
    jogadas = 0
}

function verificaVencerdor(numeroDiscos){
    let totalDiscos = document.querySelectorAll(".disco")
    if(numeroDiscos >= totalDiscos.length){
        return true
    }
}

function listarNivelFacil(){
    main.innerHTML = ""
    main.appendChild(criarElementosNivelFacil())
    discosReset = document.querySelectorAll(".disco")
    torres = document.getElementsByClassName("torre")
    disco = 0
}

function listarNivelMedio(){
    main.innerHTML = ""
    main.appendChild(criarElementosNivelMedio())
    discosReset = document.querySelectorAll(".disco")
    torres = document.getElementsByClassName("torre")
    disco = 0
}

function listarNivelDificil(){
    main.innerHTML = ""
    main.appendChild(criarElementosNivelDificil())
    discosReset = document.querySelectorAll(".disco")
    torres = document.getElementsByClassName("torre")
    disco = 0
}

