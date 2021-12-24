
var perimetroCuadrado = (lado) => {
  return lado * 4;

}
var areaCuadrado = (lado) => {
  var area = lado * lado;
  return area;
}

var perimetroTriangulo = (lado, lado2, base) => {
  var perimetro = lado + lado2 + base;
}
var areaTriangulo = (base, altura) => {
  var areaTriangulo = (base * altura) / 2;

}
function diametroCirculo(radio) {
  var diametro = radio * 2;
  return diametro;
}
var perimetroCirculo = (radio) => {
  var PI = Math.PI;
  var perimetro = diametroCirculo(radio) * PI;
}
var areaCirculo = (radio) => {
  var areaCirculo = (radio * radio) * PI;
}

function triangulo(radio) {
  return radio * 2;
}

var calcularAreaCuadrado = () => {
  const input = document.getElementById("Input");
  const value = input.value;
  const area = areaCuadrado(value);
  document.getElementsByClassName('result').innerHTML = ' ' + area;

}