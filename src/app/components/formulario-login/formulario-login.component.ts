import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { User } from 'src/app/users/shared/user';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  formUser!: FormGroup;
  login = {
    email: '',
    senha: '',
  };
  users: any = [];

  title = 'login';


  constructor(
    privateStorage: LocalStorageService,
    private router: Router

    ){

  }

  ngOnInit() {
    this.createForm (new User());

  }

  createForm(user:User){
    this.formUser = new FormGroup({
      email: new FormControl(user.email),
      senha: new FormControl(user.senha)
    })

  }
  onSubmit(){
    console.log(this.formUser.value);
  }
  signIn() {
    const isUserExist = this.users.some(
      (e: any) => e.email == this.login.email && e.password == this.login.senha
    );

    if (isUserExist) {
      this.users.setLoggedIn(this.login);
      setTimeout(() => {
        this.router.navigate(['home']);

      }, 1000);
    } else {
      alert('Dados incorretos.');
    }
  }
  esqueceuASenha() {
    window.alert('Funcionalidade em construção..')
  }



}
