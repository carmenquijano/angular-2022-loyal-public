//node!
import { BuscadorLibro } from './buscador';
import { Buscador } from './buscador';
import { BuscadorPeliculas } from './buscador';

//clave desde el browser
const claveBusqueda = 'iron main';

//desde afuera le defino la instancia particular
const buscador = new Buscador(new BuscadorLibro());
//invoco la busqueda

buscador.setClave(claveBusqueda);

buscador.buscarArticulos();//solo busca,no retorna datos!!!!

const articulos = buscador.getArticulos();

articulos.forEach(articulo => {
    articulo.toString()
});

