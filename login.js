function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 🔥 lista já otimizada (normalizada uma vez só)
const nomesValidos = [
  "anderson", "bernardo", "ronaldo", "guilherme", "andre", "joao"
];

// 🔥 elementos
const input = document.getElementById("nomeUsuario");
const erro = document.getElementById("erroLogin");
const botao = document.getElementById("btnLogin");

// 🔥 login
function login() {
  const nome = normalizar(input.value.trim());
  

  if (!nome) {
    mostrarErro("Digite um nome!");
    return;
  }
  if (nome === "boss") {
    window.location.href = "boss.html";
    return;
  }

  if (nomesValidos.includes(nome)) {
    window.location.href = "index.html";
    return;
  }

  mostrarErro("Nome inválido!");
}

// 🔥 erro com animação simples
function mostrarErro(msg) {
  erro.textContent = msg;
  erro.classList.remove("erro-animacao");

  // força reflow (melhor que setTimeout)
  void erro.offsetWidth;

  erro.classList.add("erro-animacao");
}

// 🔥 clique
botao.addEventListener("click", login);

// 🔥 ENTER funciona
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") login();
});