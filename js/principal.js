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

var imcPaciente = peso/(altura*altura);

paciente.querySelector(".info-imc").textContent = imcPaciente
alert(imcPaciente);