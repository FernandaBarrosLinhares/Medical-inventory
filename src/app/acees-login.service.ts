import { Injectable } from '@angular/core';
import { User } from './users/shared/user';

let users: Array<IUser>;

export interface IUser{
  email?:string | null;
  password?: string |null;
}

@Injectable({
  providedIn: 'root'
})
export class AceesLoginService {

  constructor() {
    if(!localStorage.getItem('user')){
      users = new Array<User>();
      return;
    }
    users = JSON.parse(localStorage.getItem("user")!);
   }

   //Funcao para Login
   login(loginUser:IUser):{menssage:string} | null{
    let userExist = false;

    const connected = users.some((user)=>{
      userExist = userExist || loginUser.email   === loginUser.email;
      return(
        user.email === loginUser.email&& user.password === loginUser.password
      );

    });

    //Se conectado, vai no local storage e grava na variavel,o usuario que esta conectado
    if(connected) localStorage.setItem("User_logged", loginUser.email!);
    return !connected
// Aqui uso um ternario, dentro de outro ternario.
    ? userExist
      ? {menssage: "Senha incorretos"}
      :{menssage:" Usuário não existe"}
    :null;

   }
}
