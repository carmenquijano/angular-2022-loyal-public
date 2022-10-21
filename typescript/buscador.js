"use strict";
exports.__esModule = true;
exports.Buscador = exports.BuscadorPeliculas = exports.BuscadorLibro = void 0;
var articulo_1 = require("./articulo");
var BuscadorLibro = /** @class */ (function () {
    function BuscadorLibro() {
    }
    BuscadorLibro.prototype.buscar = function (clave) {
        console.log("buscando libros: ".concat(clave));
        //obtner de algun lugar externo!!!
        //invocar a un api rest/graph o db o txt, o sv
        var libro = new articulo_1.Libro('iron man 1', 'autor', 1200, '13132132123312');
        var libro1 = new articulo_1.Libro('iron man 2', 'autor', 1300, '13132132123312');
        var libro2 = new articulo_1.Libro('iron man 3', 'autor', 1400, '13132132123312');
        return [libro, libro1, libro2];
    };
    return BuscadorLibro;
}());
exports.BuscadorLibro = BuscadorLibro;
var BuscadorPeliculas = /** @class */ (function () {
    function BuscadorPeliculas() {
    }
    BuscadorPeliculas.prototype.buscar = function (clave) {
        console.log("buscando con buscador de peliculas: ".concat(clave));
        //obtner de algun lugar externo!!!
        //invocar a un api rest/graph o db o txt, o sv
        var peli1 = new articulo_1.Pelicula('iron man 1', 'autor', 1200, 'THE WALT DISNEY COMPANY', 'BLUERAY');
        var peli2 = new articulo_1.Pelicula('iron man 2', 'autor', 1300, 'THE WALT DISNEY COMPANY', 'BLUERAY');
        var peli3 = new articulo_1.Pelicula('iron man 3', 'autor', 1400, 'THE WALT DISNEY COMPANY', 'BLUERAY');
        return [peli1, peli2, peli3];
    };
    return BuscadorPeliculas;
}());
exports.BuscadorPeliculas = BuscadorPeliculas;
//otros buscadores!!!!
var Buscador = /** @class */ (function () {
    function Buscador(iBuscar) {
        this.iBuscar = iBuscar;
        this.articulos = [];
        //new BuscadorLibro() > cumplen IBuscar => tiene el metodo buscar(string)
        //new BuscadorPelicuas()
        //new BuscadorAlgo()
        this.buscador = iBuscar;
    }
    Buscador.prototype.setClave = function (clave) {
        this.clave = clave || '';
    };
    Buscador.prototype.buscarArticulos = function () {
        this.articulos = this.buscador.buscar(this.clave);
    };
    Buscador.prototype.getArticulos = function () {
        return this.articulos || [];
    };
    return Buscador;
}());
exports.Buscador = Buscador;
