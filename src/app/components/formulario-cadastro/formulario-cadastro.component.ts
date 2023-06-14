import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    this.criarForm();
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
