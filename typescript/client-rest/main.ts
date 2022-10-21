import { FacturaRepostiroy, UsuarioRepository } from './../repository';
import { ListadoComponent } from './application/user/find/listado-component';
import { AxiosReqRestRestClient } from './infrastructure/user/client-rest';

const service = new AxiosReqRestRestClient();

const repository = new UsuarioRepository();
const listadoComponent = new ListadoComponent(service, repository);

listadoComponent.onInit();

//fin!