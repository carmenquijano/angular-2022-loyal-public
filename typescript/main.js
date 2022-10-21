"use strict";
exports.__esModule = true;
//node!
var buscador_1 = require("./buscador");
var buscador_2 = require("./buscador");
//clave desde el browser
var claveBusqueda = 'iron main';
//desde afuera le defino la instancia particular
var buscador = new buscador_2.Buscador(new buscador_1.BuscadorLibro());
//invoco la busqueda
buscador.setClave(claveBusqueda);
buscador.buscarArticulos(); //solo busca,no retorna datos!!!!
var articulos = buscador.getArticulos();
articulos.forEach(function (articulo) {
    articulo.toString();
});
