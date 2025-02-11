let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";

    // Cor do botão "Adicionar"
    const botaoAdicionar = document.querySelector(".button-add");
    botaoAdicionar.style.backgroundColor = amigos.length > 0? "orange": "var(--color-tertiary)";

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}

function reiniciarJogo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Cor do botão "Adicionar"
    const botaoAdicionar = document.querySelector(".button-add");
    botaoAdicionar.style.backgroundColor = "var(--color-tertiary)";
}