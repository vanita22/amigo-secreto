// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("debes ingersar un nombre");
        return;
    }
    //linea de código para que no se repitan los nombres
    if (amigo.includes(nombreAmigo)) {
        alert("nombre ya existe, ingrese otro nombre");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i=0; i< amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigo.length === 0) {
        alert("no hay amigos para mostrar");
        return;
    }
    //código que obliga agregar más de 3 amigos
    if(amigo.length < 3){
        alert("ingrese un mínimo de 3 amigos");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random()* amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

