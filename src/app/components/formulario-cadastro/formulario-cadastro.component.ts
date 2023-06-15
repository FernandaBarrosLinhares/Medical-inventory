import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {
//Declaração do FormGroup para utilização do ReactiveForm

formRegister!: FormGroup;

constructor(){}

  ngOnInit(){
    //this.criarForm();

    //Validação de formulário do ReactiveForm
    this.formRegister = new FormGroup({
      id: new FormControl (''),
      email: new FormControl('', [Validators.required]),
      password: new FormControl ('',[Validators.required]),
      confirmPassword: new FormControl('',Validators.required),
    })
  }

  get email(){
    return this.formRegister.get('email')
  }
  get password(){
    return this.formRegister.get('password')
  }
  get confirmPassword(){
    return this.formRegister.get('confirmPassword')
  }
//para não ficar travado nas validações
  submit(){
    if(this.formRegister.invalid)
    return;
  }

  //Função de inicializacao do form Reactive Form

  criarForm(){
    this.formRegister = new FormGroup ({
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl(''),

    })
  }
// Declação do FormGroup para utilização no Reactive Forms
cadastrar(){
  console.log('Reactive |Forms');
  if(this.formRegister.value.senha ! == this.formRegister.value.confirmarSenha == this.formRegister.value.confirmarSenha){
    window.alert('Dados incorretos');
  }else{
    window.alert('ok')
  }
}

}
