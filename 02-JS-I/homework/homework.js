// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";
//var texto = "hola"//

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25;
//var numero = 25//

// Crea una variable booleana:
const nuevoBool = false ;
//var estalloviendo = false//

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
//var a = 10 - 5//

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
//var a = 10 * 4//

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 4.2 ;
//var a = 21 / 5//


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var str;
  str - prompt("Ingrese una frase", "");
  return "la string provista:" + str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero","");
  y - prompt("Ingrese otro numero", "");
  var a = x + y;
  return a;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  var a = x - y;
  return a;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  var a = x * y;
  return a;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  var a = x * y;
  return a;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  if (x = y) {
    return true;
  }
    return false;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var str1;
  var str2;
  str1 - prompt("Ingrese una palabra", "");
  str2 - prompt("Ingrese otra palabra", "");
  var a = console.log(str1.length);
  var b = console.log(str2.length);
  if (a = b){
    return true;
  }
    return false;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "")
  if (num < 90) {
    return true;
  }
    return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  num -  prompt("Ingrese un numero", "");
  if (num > 50) {
    return true;
  }
    return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var x;
  var y;
  x - prompt("Ingrese un numero", "");
  y - prompt("Ingrese otro numero", "");
  var a = x / y;
  return a;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  if (num%2==0) {
    return true;
  }
    return false;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  if (num%2==0) {
    return false;
  }
    return true;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  Math.pow(num,2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  Math.pow(num,3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  Math.pow(num,exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var num;
  num - prompt("Ingrese un numero", "");
  Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var num;
  num - prompt("Ingrese un numero", "");
  Math.random[0,1];
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var numero;
  numero - prompt("Ingrese un numero", "");
  if (numero = 0){
    return false
  }else if (numero < 0){
    return "Es negativo"
  }else if (numero > 0){
    return "Es positivo"
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var str;
  str - prompt("Ingrese una frase", "");
  var sig = "!";
  var edit = str + sig;
  return edit;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombre;
  var apellido;
  nombre - prompt("Ingrese su nombre", "");
  apellido - prompt("Ingrese su apellido", "");
  var nomEnt = nombre + apellido;
  return nomEnt;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var nombre;
  nombre - prompt("Ingrese su nombre", "");
  var hola = "hola";
  var saludo = hola + nombre;
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var alto;
  var ancho;
  alto - prompt("Ingrese el alto", "");
  ancho - prompt("Ingrese el ancho", "");
  var area = alto * ancho;
  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var lado;
  lado - prompt("Ingrese el valor del lado", "");
  var perimetro = lado; 
  return perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = base * altura / 2;
  return area;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var euro;
  euro - prompt("Ingrese la cantidad en Euros", "");
  var dolar = euro * 1.20;
  return "Los " + euro + "Equivale a " + dolar;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var letra;
  letra - prompt("Ingrese una letra", "");
  var letra = console.log(str1.length);
  if (letra > 1) {
    return "Dato incorrecto";
  }else if (letra = "a") {
    return "Es vocal";
  }else if (letra = "e"){
    return "Es vocal";
  }else if (letra = "i"){
    return "Es vocal";
  }else if (letra = "o"){
    return "Es vocal";
  }else if (letra = "U"){
    return "Es vocal";
  }
    return "Dato ncorrecto";
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
