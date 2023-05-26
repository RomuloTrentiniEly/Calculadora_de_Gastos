var array = []; // Array para armazenar objetos com informações de nome, valor e data
var gasto = []; // Array para armazenar apenas os valores dos gastos

function adicionar() {
  let nome = document.getElementById("nome").value; // Obtém o valor do campo de input "nome"
  var valor = parseFloat(document.getElementById("valor").value); // Obtém e converte o valor do campo de input "valor"
  let data = document.getElementById("data").value; // Obtém o valor do campo de input "data"
  let lista = document.getElementById("lista"); // Obtém a referência à lista no HTML

  let provisorio = { // Cria um objeto para armazenar temporariamente as informações do gasto
    nome: nome, 
    valor: valor,
    data: data
  };

  array.push(provisorio); // Adiciona o objeto de gasto ao array "array"
  gasto.push(valor); // Adiciona o valor do gasto ao array "gasto"
  let li = document.createElement("li"); // Cria um elemento <li> para exibir os dados do gasto
  li.id = "li.item"; //
  li.textContent = `Nome: ${nome} ||| Valor:${valor} ||| Data:${data}`; // Define o conteúdo de texto do elemento <li> com os dados do gasto

  let x = document.createElement("button"); 
  li.id = "botão";// Cria um elemento <button> para o botão de exclusão
  x.innerHTML = "Excluir"; // Define o texto interno do botão como "Excluir"
  x.addEventListener("click", function() {
    lista.removeChild(li); // Remove o elemento <li> da lista ao clicar no botão de exclusão
    array.splice(lista, 1);
    remover(valor); // Chama a função "remover" para remover o valor do gasto do array "gasto"
    console.log(array)

  }.bind(null, valor));

  lista.appendChild(li); // Adiciona o elemento <li> à lista no HTML
  li.appendChild(x); // Adiciona o botão de exclusão ao elemento <li>

  document.getElementById("nome").value = ""; // Limpa o campo de input "nome"
  document.getElementById("valor").value = ""; // Limpa o campo de input "valor"
  document.getElementById("data").value = ""; // Limpa o campo de input "data"

  calcular(); // Chama a função "calcular" para atualizar o valor total dos gastos
  
}

function calcular() {
  let gastoTotal = document.getElementById("gastoToTal"); // Obtém a referência ao elemento que exibe o valor total dos gastos
  let total = 0; // Variável para armazenar o valor total dos gastos

  for (let i = 0; i < gasto.length; i++) {
    total += gasto[i]; // Soma os valores dos gastos ao total
  }

  gastoTotal.innerHTML = ""; // Limpa o conteúdo do elemento que exibe o valor total dos gastos
  gastoTotal.innerHTML =`R$ ${total}`; // Exibe o valor total dos gastos no elemento
}

function remover(valor) {
  const index = gasto.indexOf(valor); // Encontra o índice do valor do gasto no array "gasto"

  if (index != -1) {
    gasto.splice(index, 1); // Remove o valor do gasto do array "gasto"
    calcular(); // Chama a função "calcular" para atualizar o valor total dos gastos após a remoção
  }
}









    










 














