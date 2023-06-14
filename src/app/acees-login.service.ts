import { Injectable } from '@angular/core';

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
    if(!localStorage.getItem('lab_users')){
      users = new Array<IUser>();
      return;
    }
    users = JSON.parse(localStorage.getItem("Lab_users")!);
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
    if(connected) localStorage.setItem("Lab_connected", loginUser.email!);
    return !connected

    ? userExist
      ? {menssage: "Senha incorretos"}
      :{menssage:" Usuário não existe"}
    :null;

   }
}
