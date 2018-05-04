var operando1;
var operando2;
var operador;

function init(){
    //Variables
     var display = document.getElementById('display');
     var reset = document.getElementById('on');
     var signo = document.getElementById('sign');
     var divicion = document.getElementById('dividido');
     var multipliacion = document.getElementById('por');
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
     // Eventos
     uno.onclick = function (e) {
       display.textContent = display.textContent + "1";
     }
     dos.onclick = function (e) {
       display.textContent = display.textContent + "2";
     }
     tres.onclick = function (e) {
       display.textContent = display.textContent + "3";
     }
     cuatro.onclick = function (e) {
       display.textContent = display.textContent + "4";
     }
     cinco.onclick = function (e) {
       display.textContent = display.textContent + "5";
     }
     seis.onclick = function (e) {
       display.textContent = display.textContent + "6";
     }
     siete.onclick = function (e) {
       display.textContent = display.textContent + "7";
     }
     ocho.onclick = function (e) {
       display.textContent = display.textContent + "8";
     }
     nueve.onclick = function (e) {
       display.textContent = display.textContent + "9";
     }
     cero.onclick = function (e) {
       display.textContent = display.textContent + "0";
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
     igual.onclick = function (e){
       operando2 = display.textContent;
       resolver();
     }
}
function limpiar() {
  display.textContent = "";
}
function resetear() {
  display.textContent = "";
  operando1 = 0;
  operando2 = 0;
  operador = "";
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
      res = parseFloat(operando1) - parseFloat(operando2);
      break;
    case "/":
      res = parseFloat(operando1) - parseFloat(operando2);
      break;
  }
  resetear();
  display.textContent = res;
}
