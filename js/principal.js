//alert("Olá mundo!");
console.log("Carregado de um arquivo externo!");
      
//armazena o elemento H1 na varável titulo
var titulo = document.querySelector('.titulo');

//Altera o conteúdo da variável titulo
titulo.textContent = "Nuticionista Aparecida";

var paciente = document.querySelector("#primeiro-paciente");

var tdAltua = paciente.querySelector(".info-altura");
var altura = tdAltua.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent

var tdImc = paciente.querySelector(".info-imc");

//------------------------------------------------------
//Validações de altura e peso

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso >= 1000) {
  pesoEhValido = false;
  tdImc.textContent = "Peso é inválido!"
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
  tdImc.textContent = "Altura é inválida!"
}

if(alturaEhValida && pesoEhValido) {
  var imcPaciente = peso/(altura*altura);

  tdImc.textContent = imcPaciente;
}