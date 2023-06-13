import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login={
    email: "",
    password: "",
  }
user: any =[];

  constructor(private router: Router) { }


   // Lógica de autenticação aqui
    // Você pode verificar se o email/senha é válido

  InSign() {
    const IUser = this.user.some(
      (e:any)=> e.email == this.login.email && e.password == this.login.password
    )


    this.router.navigate(['/home']); // Redirecionar para a página principal após o login bem-sucedido
  }

    // Para abrir uma página/modal de criação de conta
  openSignupModal() {


  }



  esqueceuSuaSenha(){
    window.alert ("Página em construção!")
  }


}


