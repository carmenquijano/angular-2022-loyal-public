//clase abstracta
export abstract class Articulo {
    private titulo: string;
    public autor: string;
    public precio: number;

    constructor(titulo: string, autor: string, precio: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }

    //metodo abstracto!
    // public abstract toString():void;

    //debo implementar el metodo que quedo abstracto en el padre
    public toString(): void {
        console.log(JSON.stringify(this));
    }
}

//clase hija
export class Libro extends Articulo {
    //propio atributos
    private isbn: string;

    constructor(
        titulo: string,
        autor: string,
        precio: number,
        isbn: string) {
        //nace el padre
        super(titulo, autor, precio);
        //el hijo puede setear sus atributos
        this.isbn = isbn;
    }
}
export class Pelicula extends Articulo {
    //propio atributos
    private productora: string;
    private formato: string;

    constructor(
        titulo: string,
        autor: string,
        precio: number,
        productora: string,
        formato: string) {
        //nace el padre
        super(titulo, autor, precio);
        //el hijo puede setear sus atributos
        this.formato = formato;
        this.productora = productora;
    }
}