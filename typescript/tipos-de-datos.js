var edad = 10;
var altura = 175;
// altura = 'hola';
var alto = true;
;
var persona = {
    dni: 1234654654,
    apellido: 'lopez',
    altura: 175
};
;
var Persona = /** @class */ (function () {
    //constructor
    function Persona(dni, apellido, altura) {
        this.setApellido(apellido);
        //invoco a los otros setters!
    }
    Persona.prototype.hablar = function (palabra) {
        console.log(palabra);
    };
    //getter/setter
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    //no pongo setter porque asumo que el dni es inmutable
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido || '';
    };
    return Persona;
}());
