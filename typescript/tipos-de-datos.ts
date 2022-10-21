const edad = 10;
let altura:number = 175;
// altura = 'hola';

const alto: boolean = true;

//interfaces
interface IPersona {
    dni:number,
    apellido: string,
    altura: number,
};

const persona:IPersona = {
    dni: 1234654654,
    apellido: 'lopez',
    altura: 175
};

//interface para metodos
interface IHablar {
    hablar(palabra: string): void;
};

class Persona implements IHablar{
    //atributos
    private dni: number;
    private apellido: string;
    private altura: number;

    //constructor
    constructor(dni:number,apellido:string,altura:number) {
        this.setApellido(apellido);
        //invoco a los otros setters!
    }

    hablar(palabra: string): void {
        console.log(palabra);
    }

    //getter/setter
    public getDni():number {
        return this.dni;
    }
    
    //no pongo setter porque asumo que el dni es inmutable
    public setApellido(apellido:string): void {
        this.apellido = apellido || '';
    }
}

