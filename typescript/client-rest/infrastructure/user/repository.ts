import { Usuario } from "../../domain/user/usuario";

/*db:
import { FacturaRepostiroy } from './repository';
tabla usuario
-------------
estructura

factura:
*/
export interface Repository<U,T> {
    create(entity: U) :T;
    // delete(id:number): void;
}

interface UsuarioParams {
    codigo: number,
    name: string,
    sector: string
}

export class UsuarioRepository implements Repository<UsuarioParams, Usuario> {
    create(params: UsuarioParams): Usuario {

        console.log('UsuarioRepository > params: ', params);
        //logica 
        //db.connection()

        //db.insert()
        
        return {
            id:1,
            nombre: 'primer registro',
            sector: 'sector'
        }
    }

}
//----------------------------------------
interface FacturaParams {
    codigo: number,
    name: string,
    fecha: Date
}
export class FacturaRepostiroy implements Repository<FacturaParams,Factura> {
    //tiene un constuctor por defecto!

    create(params: FacturaParams): Factura {
        console.log('FacturaRepostiroy > params: ', params);

        return new Factura(1,1500);
    }
}

//instancias!
const facturaRepostiroy = new FacturaRepostiroy(); 
const params:FacturaParams = {
    codigo: Math.random(),
    name: 'factura random',
    fecha: new Date()
}
const factura:Factura =  facturaRepostiroy.create(params);
console.log(factura);