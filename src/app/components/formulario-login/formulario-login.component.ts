import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AceesLoginService } from 'src/app/acees-login.service';
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
    private router: Router,
    private acessLoginService: AceesLoginService

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
    const {email,senha}= this.login;
    const user = this.users.find((u:any)=> u.email === email)
    if(user && senha){
      this.router.navigate(['home'])
    }

  }
  esqueceuASenha() {
    window.alert('Funcionalidade em construção..')


  }




}




