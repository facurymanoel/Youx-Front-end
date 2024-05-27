import { estado } from './estado';
export class User {

    id : number;
    login : string;
    nome : string;
    email : string;
    telefone : string;
    uf : string;
    localizacao: string;
    estado : estado;
    
}
