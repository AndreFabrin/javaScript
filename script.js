const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = window.prompt("Coloque o nome");
  button.textContent = "Nome: " + name;
}



function clickEvent() {
  document.getElementById("create").innerHTML = "Mensagem criada";
  //isso pega o ID do elemento pelas "", e coloca um valor que é gerado pela função onClick (dei nome de clickEvent)
}



function toggleSecao() {
  var conteudo = document.querySelector('.conteudo');
  conteudo.style.display = (conteudo.style.display === 'block') ? 'none' : 'block';
  //"Document method querySelector() returns the first Element within the document that matches the specified selector, 
  //or group of selectors. If no matches are found, null is returned."
  //basicamente pega a classe q indiquei e joga o "var conteudo", entao indica o display como block none
}
  // o === é diferente de == ou = mas isso é só decorar mesmo, n tem jeito fi
  
function calcular() {
  var valor1 = document.getElementById("valor1");
  var valor2 = document.getElementById("valor2");
  if (operacao = "+") {
    var result = valor1 + valor2;
    document.getElementById("resultado").document.write() = result;
  } else {
    document.getElementById("resultado").document.write() = "krl";
  }
}
