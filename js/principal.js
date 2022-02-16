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

  //Armazena os elementos da página
  var tdAltua = pacientes[i].querySelector(".info-altura");
  var altura = tdAltua.textContent;
  
  var tdPeso = pacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent
  
  var tdImc = pacientes[i].querySelector(".info-imc");
  
  var alturaEhValida = true;
  var pesoEhValido = true;

  //Validações de altura e peso
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
  
    tdImc.textContent = imcPaciente.toFixed(2);
  }  
}
