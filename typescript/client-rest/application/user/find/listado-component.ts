import { ReqRestRestClient } from '../../../infrastructure/user/client-rest';
import { UsuarioRepository } from '../../../infrastructure/user/repository';

//caso de uso
export class ListadoComponent {

    //que service ya viene instanciado desde afuera!!!
    constructor(
        private service: ReqRestRestClient,//infra
        private repository: UsuarioRepository
    ){

    }

    onInit() {
        const users = this.service.getUsers();
        console.log(users);

        //ahora creo los usuario con la respuesta del servicio
        users.data.forEach(user=> this.repository.create(
            {
                codigo: user.id,
                name:user.first_name,
                sector: user.email
            }
        ));

        const singleUser = this.service.getUser();
        console.log(singleUser);
    }
}