import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { User } from 'src/app/users/shared/user';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  formUser!: FormGroup;

  constructor(){
    privateStorage: LocalStorageService
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



}
