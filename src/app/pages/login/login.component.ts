import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! :FormGroup;


  //Incluindo 0s services criados
  constructor(){
     privateStorage: LocalStorageService
     privaterouter: Router
  }
  ngOnInit() {
    const loginForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }

   // Lógica de autenticação aqui
    // Você pode verificar se o email/senha é válido

    //Função para inicialização do form ReactiveForms
  entrar(){
    console.log('ReactiveForms');
  const newLocal = this;
    if(newLocal.loginForm.value.email !== this.loginForm.value.password){
      window.alert('erro')
    }else{
      window.alert('ok')
    }
  }
  esqueceuSuaSenha() {
    window.alert ("Página em construção!")

}

openModal(){

}

   // this.router.navigate(['/home']); // Redirecionar para a página principal após o login bem-sucedido
}
