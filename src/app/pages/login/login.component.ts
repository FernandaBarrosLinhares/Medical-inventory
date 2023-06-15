import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { LocalStorageService } from 'src/app/local-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! :FormGroup;
  @Output() Modal: EventEmitter<any> = new EventEmitter()
  private _modal: any;
  public get modal(): any {
    return this._modal;
  }
  public set modal(value: any) {
    this._modal = value;
  }


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

    criarForm(){
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        senha: new FormControl()
      });
    }

  entrar(){
    console.log('ReactiveForms');
    if(this.loginForm.value.email !== this.loginForm.value.password){
      window.alert('erro')
    }else{
      window.alert('ok')
    }
  }
  esqueceuSuaSenha() {
    window.alert ("Página em construção!")

}
showModal(){
  this.modal = this.modal
}


}


 // InSign() {
  //  const IUser = this.user.some(
   //   (e:any)=> e.email == this.login.email && e.password == this.login.password
    //)


   // this.router.navigate(['/home']); // Redirecionar para a página principal após o login bem-sucedido



function esqueceuSuaSenha() {
  throw new Error('Function not implemented.');
}

function entrar() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
    // Para abrir uma página/modal de criação de conta


