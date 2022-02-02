let disco = 0
let jogadas = 0
let contadorDiscos = 0

const torres = document.querySelectorAll(".torre")
torres.forEach((elemento) => elemento.addEventListener("click", receberDisco))

const discos = document.querySelectorAll(".disco")
discos.forEach((elemento) => elemento.addEventListener("click", selecionarDisco))

function selecionarDisco(event){
        disco = event.currentTarget.parentElement.lastElementChild
}

function receberDisco(event, discoAtual){
    discoAtual = event.currentTarget.lastElementChild;
    
    if(discoAtual == null){
        event.currentTarget.appendChild(disco)
    }else if(discoAtual.clientWidth > disco.clientWidth){
        event.currentTarget.appendChild(disco)
    }  
}