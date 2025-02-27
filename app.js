let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    amigo.push(nombreAmigo);
    renderizarAmigos();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigo.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigo.length < 2) {
        alert("Debe haber al menos 2 amigos para el sorteo.");
        return;
    }

    let amigoSorteado = Math.floor(Math.random() * amigo.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo Sorteado es: ${amigo[amigoSorteado]}`;
}

// Permitir agregar nombres presionando "Enter"
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
