//alert("Olá mundo!");
console.log("Carregado de um arquivo externo!");
      
//armazena o elemento H1 na varável titulo
var titulo = document.querySelector('.titulo');

//Altera o conteúdo da variável titulo
titulo.textContent = "Nuticionista Aparecida";

//Armazena uma lista de pacientes
var pacientes = document.querySelectorAll(".paciente");

//------------------------------------------------------

for(i=0 ; i<pacientes.length ; i++){

  paciente = pacientes[i] ;
  //Armazena os elementos da página
  var tdAltua = paciente.querySelector(".info-altura");
  var altura = tdAltua.textContent;
  
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent
  
  var tdImc = paciente.querySelector(".info-imc");
  
  var alturaEhValida = true;
  var pesoEhValido = true;

  //Validações de altura e peso
  if(peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso é inválido!"
    paciente.classList.add("paciente-invalido")
  }
  
  if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdImc.textContent = "Altura é inválida!"
    paciente.classList.add("paciente-invalido")
  }
  
  if(alturaEhValida && pesoEhValido) {
    var imcPaciente = peso/(altura*altura);
  
    tdImc.textContent = imcPaciente.toFixed(2);
  }  
}

//---- Escutar eventos ----

titulo.addEventListener("click", function() {
  console.log("Olha só, posso usar funçoes anônimas!");
})

function mostraMensagem(){
  console.log("Olá, eu fui clicado!");
}


//Clique no botão

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function () {
  console.log("Clicou em adicionar! :)");
})