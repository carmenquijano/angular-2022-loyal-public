import { Articulo, Libro,Pelicula } from "./articulo";

export interface IBuscar {
    buscar(clave:string): Articulo[];
}

export class BuscadorLibro implements IBuscar{
   
    buscar(clave:string): Articulo[] {
        console.log(`buscando libros: ${clave}`);

        //obtner de algun lugar externo!!!
        //invocar a un api rest/graph o db o txt, o sv
        const libro = new Libro('iron man 1','autor',1200,'13132132123312');
        const libro1 = new Libro('iron man 2','autor',1300,'13132132123312');
        const libro2 = new Libro('iron man 3','autor',1400,'13132132123312');

        return [libro,libro1,libro2];
    }
}
export class BuscadorPeliculas implements IBuscar{
   
    buscar(clave:string): Articulo[] {
        console.log(`buscando con buscador de peliculas: ${clave}`);

        //obtner de algun lugar externo!!!
        //invocar a un api rest/graph o db o txt, o sv
        const peli1 = new Pelicula('iron man 1','autor',1200,'THE WALT DISNEY COMPANY','BLUERAY');
        const peli2 = new Pelicula('iron man 2','autor',1300,'THE WALT DISNEY COMPANY','BLUERAY');
        const peli3 = new Pelicula('iron man 3','autor',1400,'THE WALT DISNEY COMPANY','BLUERAY');

        return [peli1,peli2,peli3];
    }
}
//otros buscadores!!!!

export class Buscador {
    private clave:string;
    private articulos:Articulo[] = [];
    private buscador: IBuscar;
    
    constructor(private iBuscar:IBuscar){
        //new BuscadorLibro() > cumplen IBuscar => tiene el metodo buscar(string)
        //new BuscadorPelicuas()
        //new BuscadorAlgo()
        this.buscador = iBuscar;
    }

    public setClave(clave:string):void {
        this.clave = clave || '';
    }

    public buscarArticulos(): void {
        this.articulos = this.buscador.buscar(this.clave);
    }

    public getArticulos(): Articulo[] {
        return this.articulos || [];
    }
}