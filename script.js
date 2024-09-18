function enviarMensagem() {
    var mensagem = document.getElementById("mensagemInput").value;
    
    // Simulação de armazenamento (substitua por lógica real)
    var mensagens = localStorage.getItem("mensagens") || "[]"; 
    mensagens = JSON.parse(mensagens);
    mensagens.push(mensagem);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
  
    // Limpar o campo de entrada
    document.getElementById("mensagemInput").value = "";
  }
  
  function carregarMensagens() {
    // Simulação de carregamento (substitua por lógica real)
    var mensagens = localStorage.getItem("mensagens") || "[]";
    mensagens = JSON.parse(mensagens);
  
    var listaMensagens = document.getElementById("listaMensagens");
    listaMensagens.innerHTML = ""; // Limpar mensagens existentes
    
    for (var i = 0; i < mensagens.length; i++) {
      var li = document.createElement("li");
      li.textContent = mensagens[i];
      listaMensagens.appendChild(li);
    }
  }
  
  // Carregar mensagens ao abrir a página mensagens.html
  if (window.location.pathname.endsWith("mensagens.html")) {
    carregarMensagens();
  }

  // ... (seu código anterior)

function apagarMensagens() {
  // Remove as mensagens do localStorage
  localStorage.removeItem("mensagens");

  // Remove as mensagens da lista na página
  var listaMensagens = document.getElementById("listaMensagens");
  listaMensagens.innerHTML = ""; 
}

// ... (seu código anterior)