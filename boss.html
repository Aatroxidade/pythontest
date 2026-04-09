function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function digitar(texto, elemento) {
  return new Promise(resolve => {
    let i = 0;

    function escrever() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 40);
      } else {
        resolve();
      }
    }

    escrever();
  });
}

// 🔥 FASE 1
async function responder() {
  const resposta = normalizar(document.getElementById("resposta").value);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (resposta === "sim") {
    esconderFase1();

    await digitar("Hm. ", resultado);
    await esperar(1000);
    await digitar("Será que eu devo confiar em você? ", resultado);
    await esperar(1000);
    await digitar("Você não parece ser do tipo que gosta de garotos fofos. ", resultado);
    await esperar(1000);
    await digitar("Você é do tipo que gosta de garotos fofos? ", resultado);

    document.getElementById("historia2").style.display = "block";

  } else if (resposta === "nao") {
    esconderFase1();

    await digitar("ELE PEGA VOCÊ E TE BEIJA LOUCAMENTE! ", resultado);
    await esperar(1000);
    await digitar("HAHAHAHAHAHAHAHA", resultado);

  } else {
    resultado.innerHTML = "Digite apenas 'sim' ou 'nao'.";
  }
}

// 🔥 FASE 2
async function historia2Func() {
  const resposta2 = normalizar(document.getElementById("resposta2").value);
  const resultado2 = document.getElementById("resultado2");

  resultado2.innerHTML = "";

  if (resposta2 === "sim") {
    esconderFase2();

    await digitar("Interessante... você é mais estranho do que pensei. ", resultado2);

  } else if (resposta2 === "nao") {
    esconderFase2();

    await digitar("Eu sabia... você não é confiável. ", resultado2);

  } else {
    resultado2.innerHTML = "Digite apenas 'sim' ou 'nao'.";
  }
}

// 🔧 AUXILIARES
function esconderFase1() {
  document.getElementById("historia").style.display = "none";
  document.getElementById("resposta").style.display = "none";
  document.getElementById("btn1").style.display = "none";
}

function esconderFase2() {
  document.getElementById("resposta2").style.display = "none";
  document.getElementById("btn2").style.display = "none";
}

// 🔄 RESET
function reiniciar() {
  location.reload();
}
