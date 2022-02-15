//alert("Olá mundo!");
console.log("Carregado de um arquivo externo!");
      
//armazena o elemento H1 na varável titulo
var titulo = document.querySelector('.titulo');

//Altera o conteúdo da variável titulo
titulo.textContent = "Nuticionista Aparecida";

var paciente = document.querySelector("#primeiro-paciente");

var alturaPaciente = paciente.querySelector(".info-altura");
var altura = alturaPaciente.textContent;

var pesoPaciente = paciente.querySelector(".info-peso").textContent;
var peso = pesoPaciente.textContent

var imcPaciente = peso/(altura*altura);

alert(imcPaciente);