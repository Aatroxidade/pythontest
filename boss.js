function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// FASE 1
async function responder() {
    const resposta = normalizar(document.getElementById("resposta").value);
    const resultado = document.getElementById("resultado");

    if (resposta === "sim") {

        esconderFase1();

        let texto = "Você decidiu ouvir...";
        resultado.textContent = texto;

        await esperar(2000);
        texto += " algo parece estranho...";
        resultado.textContent = texto;

        await esperar(2000);
        texto += " ele começa a falar com você...";
        resultado.textContent = texto;

        await esperar(2000);
        resultado.textContent += "\n\nO-obrigado, prazer... Eu sou o Dudu... poderia me ajudar?...";

        await esperar(2000);
        document.getElementById("historia2").style.display = "block";

    } else if (resposta === "nao") {

        esconderFase1();

        let texto = "Você tentou ignorar...";
        resultado.textContent = texto;

        await esperar(2000);
        texto += " mas ele simplesmente te devorou 😨";
        resultado.textContent = texto;

    } else {
        resultado.textContent = "Digite apenas 'sim' ou 'nao'.";
    }
}

// FASE 2
async function historia2Func() {
    const resposta = normalizar(document.getElementById("resposta2").value);
    const resultado2 = document.getElementById("resultado2");

    document.getElementById("resultado").style.display = "none";

    if (resposta === "sim") {

        esconderFase2();

        let texto = "Ele fica feliz.";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "Então...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "Dudu se aproxima e toca no seu queixo...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "Eu sempre soube que você era meu...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "Era só questão de tempo.";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "*Dudu te agarra e beija.*";
        resultado2.textContent = texto;

        await esperar(2000);
        texto = "Nada mais é ouvido.";
        resultado2.textContent = texto;

    } else if (resposta === "nao") {

        esconderFase2();

        let texto = "Ele fica em silêncio...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto += " o clima fica pesado...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto += " ele achou que podia confiar em você...";
        resultado2.textContent = texto;

        await esperar(2000);
        texto += " mas estava enganado.";
        resultado2.textContent = texto;

        await esperar(2000);
        texto += " fim inevitável...";
        resultado2.textContent = texto;

    } else {
        resultado2.textContent = "Digite apenas 'sim' ou 'nao'.";
    }
}

// FUNÇÕES AUXILIARES
function esconderFase1() {
    document.getElementById("historia").style.display = "none";
    document.getElementById("resposta").style.display = "none";
    document.querySelector("button").style.display = "none";
}

function esconderFase2() {
    document.getElementById("resposta2").style.display = "none";
    document.querySelectorAll("button")[1].style.display = "none";
}

// RESET
function reiniciar() {
    location.reload(); // 🔥 mais leve e sem bug
}