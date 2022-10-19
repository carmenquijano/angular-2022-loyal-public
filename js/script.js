//dif?
//global ('mala palabra')
var a = "a";

//puedo hacer cambios a la variable a1
let a1 = "a";

//constante
const a2 = "a";

//mostrar los valores
console.log(a);
console.log(a1);
console.log(a2);

a = "otra valor";
//a2 = "otro valor";

/*
operadores:
 aritmeticos
 +,-,*,/,%
  
 logicos
 || && ! //

 relacionales
 <,>;>=;<= : valor boolean
*/
const x = 10;
const y = 20;
const z = x < y;// true

/*TABLA DE VERDAD DEL ||*/
/*
A       | B     | A || B   | A && B |  !A   |   !B      | xor
--------------------------------------------------------------
true    true        true    true      false     false   false
true    false       true    false     false     true    true
false   true        true    false     true      false   true
false   false       false   false     true      true    false
-------------------------------------------------------------
*/

const d = x === 5 || y ===5; //false
console.log(d);

//A par?
const esPar = a % 2; // 0 1

//saber el tipo??
let tipoDeA = typeof a;
console.log(tipoDeA);

a = 10;
tipoDeA = typeof a

console.log(tipoDeA);

const esAlumno = true;
console.log(typeof esAlumno);

let esprofesor;//???

console.log(esprofesor)

/* funciones*/
function sumar() {
    console.log('sumar')
}

sumar1 = function() {
    console.log('sumar1')
}

//react + angular
sumar2 = () => {
    console.log('sumar2')
}

let valor = sumar();
valor = sumar1();
valor = sumar2;//no estoy ejecutando la funcion

console.log(typeof valor);

valor();

//puedo pasar funciones como parametro
function xx() {
    console.log('x');
}

function yy (f) {
    console.log('y');
    if(f) {
        f();
    }
}

// const vy = yy(sumar2);
