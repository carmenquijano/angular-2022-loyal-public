"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pelicula = exports.Libro = exports.Articulo = void 0;
//clase abstracta
var Articulo = /** @class */ (function () {
    function Articulo(titulo, autor, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
    //metodo abstracto!
    // public abstract toString():void;
    //debo implementar el metodo que quedo abstracto en el padre
    Articulo.prototype.toString = function () {
        console.log(JSON.stringify(this));
    };
    return Articulo;
}());
exports.Articulo = Articulo;
//clase hija
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(titulo, autor, precio, isbn) {
        var _this = 
        //nace el padre
        _super.call(this, titulo, autor, precio) || this;
        //el hijo puede setear sus atributos
        _this.isbn = isbn;
        return _this;
    }
    return Libro;
}(Articulo));
exports.Libro = Libro;
var Pelicula = /** @class */ (function (_super) {
    __extends(Pelicula, _super);
    function Pelicula(titulo, autor, precio, productora, formato) {
        var _this = 
        //nace el padre
        _super.call(this, titulo, autor, precio) || this;
        //el hijo puede setear sus atributos
        _this.formato = formato;
        _this.productora = productora;
        return _this;
    }
    return Pelicula;
}(Articulo));
exports.Pelicula = Pelicula;
