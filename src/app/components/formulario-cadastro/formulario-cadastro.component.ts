import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/users/shared/new-user';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {
//Declaração do FormGroup para utilização do ReactiveForm
formNewUser!: FormGroup;

constructor(){}

  ngOnInit(){
    this.createForm (new NewUser());

    //Validação de formulário do ReactiveForm
    this.formNewUser = new FormGroup({
      id: new FormControl (''),
      email: new FormControl('', [Validators.required]),
      password: new FormControl ('',[Validators.required]),
      confirmPassword: new FormControl('',Validators.required),
    })
  }
  createForm(newUser: NewUser){
    this.formNewUser = new FormGroup ({
      email: new FormControl(newUser.email),
      senha: new FormControl(newUser.senha),
      confirmarSenha: new FormControl(newUser.confirmarSenha),

    })
  }

  get email(){
    return this.formNewUser.get('email')
  }
  get password(){
    return this.formNewUser.get('password')
  }
  get confirmPassword(){
    return this.formNewUser.get('confirmPassword')
  }
//para não ficar travado nas validações
onSubmit(){
  console.log(this.formNewUser.value);
}

  //Função de inicializacao do form Reactive Form


// Declação do FormGroup para utilização no Reactive Forms
register(){
  console.log('Reactive |Forms');
  if(this.formNewUser.value.senha ! == this.formNewUser.value.confirmarSenha == this.formNewUser.value.confirmarSenha){
    window.alert('Dados incorretos');
  }else{
    window.alert('ok')
  }
}

}
