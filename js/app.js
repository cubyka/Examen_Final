var operando1;
var operando2;
var operador;

function init(){
    //Variables
     var display = document.getElementById('display');
     var reset = document.getElementById('on');
     var signo = document.getElementById('sign');
     var division = document.getElementById('dividido');
     var raiz = document.getElementById('raiz');
     var multiplicacion = document.getElementById('por');
     var resta = document.getElementById('menos');
     var suma = document.getElementById('mas');
     var punto = document.getElementById('punto');
     var igual = document.getElementById('igual');
     var uno = document.getElementById('1');
     var dos = document.getElementById('2');
     var tres = document.getElementById('3');
     var cuatro = document.getElementById('4');
     var cinco = document.getElementById('5');
     var seis = document.getElementById('6');
     var siete = document.getElementById('7');
     var ocho = document.getElementById('8');
     var nueve = document.getElementById('9');
     var cero = document.getElementById('0');
     var botonPulsado = document.getElementsByClassName('tecla');
     // Eventos
     for(let i=0; i< botonPulsado.length; i++){
       botonPulsado[i].addEventListener('mousedown',function(){
         botonPulsado[i].style = "transform:scale(0.95,0.95)"
       });
       botonPulsado[i].addEventListener('mouseup',function(){
         botonPulsado[i].style = "transform:scale(1,1)"
       })
     }
     uno.onclick = function (e) {
       var valorTecla = uno.id;
       validar(valorTecla);
     }
     dos.onclick = function (e) {
       var valorTecla = dos.id;
       validar(valorTecla);
     }
     tres.onclick = function (e) {
       var valorTecla = tres.id;
       validar(valorTecla);
     }
     cuatro.onclick = function (e) {
       var valorTecla = cuatro.id;
       validar(valorTecla);
     }
     cinco.onclick = function (e) {
       var valorTecla = cinco.id;
       validar(valorTecla);
     }
     seis.onclick = function (e) {
       var valorTecla = seis.id;
       validar(valorTecla);
     }
     siete.onclick = function (e) {
       var valorTecla = siete.id;
       validar(valorTecla);
     }
     ocho.onclick = function (e) {
       var valorTecla = ocho.id;
       validar(valorTecla);
     }
     nueve.onclick = function (e) {
       var valorTecla = nueve.id;
       validar(valorTecla);
     }
     cero.onclick = function (e) {
       var valorTecla = cero.id;
       validar(valorTecla);
     }
     punto.onclick = function (e) {
       var valorTecla = "."
       if (display.textContent.indexOf(".") == -1) {
         validar(valorTecla);
       }
     }
     signo.onclick = function (e) {
       if (display.textContent != "0") {
         if(display.textContent.indexOf("-") != -1){ //si lo encuentra
           display.textContent = display.textContent.toString();
           display.textContent = display.textContent.slice(1);
         } else {
           display.textContent = "-" + display.textContent;
         }
       }
     }
     reset.onclick = function (e) {
       resetear();
     }
     suma.onclick = function (e) {
       operando1 = display.textContent;
       operador = "+";
       limpiar();
     }
     resta.onclick = function (e) {
       operando1 = display.textContent;
       operador = "-";
       limpiar();
     }
     multiplicacion.onclick = function (e) {
       operando1 = display.textContent;
       operador = "*";
       limpiar();
     }
     division.onclick = function (e) {
       operando1 = display.textContent;
       operador = "/";
       limpiar();
     }
     raiz.onclick = function (e){
       operando1 = display.textContent;
       operador = "raiz";
       resolver();
     }
     igual.onclick = function (e){
       operando2 = display.textContent;
       resolver();
     }
}
function limpiar() {
  display.textContent = "";
}
function resetear() {
  display.textContent = "0";
  operando1 = 0;
  operando2 = 0;
  operador = "";
}
function validar(valorTecla) {
  if (display.textContent == "0" && valorTecla != ".") {
    display.textContent = valorTecla;
  } else if (display.textContent.length < 8) {
    display.textContent = display.textContent + valorTecla;
  }
}
function resolver(){
  var res = 0;
  switch(operador){
    case "+":
      res = parseFloat(operando1) + parseFloat(operando2);
      break;
    case "-":
      res = parseFloat(operando1) - parseFloat(operando2);
      break;
    case "*":
      res = parseFloat(operando1) * parseFloat(operando2);
      break;
    case "/":
      res = parseFloat(operando1) / parseFloat(operando2);
      break;
    case "raiz":
      res = Math.sqrt(parseFloat(operando1));
      break;
  }
  res = res.toString();
  display.textContent = res.slice(0, 8);
}

init();
