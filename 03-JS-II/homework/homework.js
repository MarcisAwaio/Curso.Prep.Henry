// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  if ( x > y ){
    return x;
  }else if ( x < y ){
    return y;
  }else if ( x === y ){
    return x
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var edad;
  edad - prompt("Ingrese su edad", "");
  if (edad >= 18 ){
    return "Allowed";
  }
    return "Not Allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1){
    return "Online";
  }else if (status === 2){
    return "Away";
  }
    return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var idioma;
  idioma - prompt("¿Cual es su Idioma?", "");
  if (idioma === "aleman"){
    return "Guten Tag!";
  }else if (idioma === "mandarin"){
    return "Ni Hao!";
  }else if (idioma === "ingles"){
    return "Hello!";
  }
    return "Hola!";
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var color;
  color - prompt("Ingrese un color", "");
  if (color === "blue"){
    return "This is blue";
  }else if (color === "red"){
    return "This is red";
  }else if (color === "green"){
    return "This is green";
  }else if (color === "orange"){
    return "This is orange";
  }
    return "Color not found";
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 ){
    return true;
  }else if (numero === 5){
    return true;
  }
    return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var numero;
  numero - prompt("Ingrese un numero", "");
  if (numero > 20){
    if (numero < 50){
      return true;
    }
    return false;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var numero;
  numero - prompt("Ingrese un numero", "");
  if (numero % 1 == 0){
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var numero;
  numero - prompt("Ingrese un numero", "");
  if (numero % 3 == 0){
    if (numero % 5 == 0){
      console.log("fizzbuzz");
    }
    console.log("buzz");
  }else if (numero % 3 == 0){
    console.log ("fit");
  }else {
   return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 = 0){
    console.log ("Error");
  }else if (num2 = 0){
    console.log("Error");
  }else if (num3 = 0){
    console.log("Error");
  }else if (num1 < 0){
    console.log("Hay negativos");
  }else if (num2 < 0){
    console.log("Hay negativos");
  }else if (num3 < 0){
    console.log("Hay negativos");
  }else if (num1 > num2){
    if (num1 > num3){
      console.log("Numero 1 es mayor y positivo");
    }else if (num3 > num2){
      if (num3 > num1){
        num3++;
        return num3;
      }else
      return false;
    }else{
    return false;
    }
  }else{
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var numero;
  var cont = 0;
  numero = prompt("Ingrese un numero", "");
  for (let div = 1; div <= numero; div++) {
    if (numero % div == 0){
      cont++;
    }
  }
  if(cont == 2){
    return true;
  }else{
    return false;
  }

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  function esVerdadero(valor){
  if (valor==true){
    return "Soy Verdadero";
  }else{
    return "Soy falso";
  }
}
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = ["6x0=0", "6x1=6", "6x2=12", "6x3=18", "6x4=24", "6x5=30", "6x6=36", "6x7=42", "6x8=48", "6x9=54", "6x10=60"];
  for (var a = 0; a < tabla.length; a++) {
  console.log(tabla[a]);
  }
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var numero;
  numero - prompt("Ingrese un numero", "");
  var larg = (numero.length);
  if (larg=3){
    return true;
  }else
  return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var numero = prompt("Ingrese un numero", "");
  var cont=0;
  do {
    numero=numero + 5;
    cont++;
    }while (cont<=8);
    return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
