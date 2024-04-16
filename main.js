
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("?");

    
    if (respostaTime.toLowerCase() === "Programação") {
      alert("Bem vindo a minha pagina!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é essa senha.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
