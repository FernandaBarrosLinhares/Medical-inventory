import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { NewUser } from 'src/app/users/shared/new-user';


@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {
//Declaração do FormGroup para utilização do ReactiveForm
formNewUser!: FormGroup;
formData={
  email:'',
  senha:'',
  confirmarSenha:'',
};

constructor(private storage: LocalStorageService){
  this.storage.getStorage('users')
      ? (this.formNewUser = this.storage.getStorage('users'))
      : [];
}

  ngOnInit(){
    this.createForm (new NewUser());

    //Validação de formulário do ReactiveForm
    this.formNewUser = new FormGroup({
      id: new FormControl (''),
      email: new FormControl('', [Validators.minLength(10), Validators.email, Validators.required]),
      password: new FormControl ('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
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


onSubmit() {
  //  logica para fazer seu formulário salvar
  this.storage.setStorage('users', this.formNewUser.value);
  this.formNewUser = new FormGroup ({
    id:new FormControl (''),
    email: new FormControl('',[Validators.minLength(10), Validators.email, Validators.required]),
    senha: new FormControl ('',[Validators.minLength(10), Validators.required]),
    confirmarSenha: new FormControl ('',[Validators.minLength(10), Validators.required])
  })
  this.formData = {
    email:'',
    senha:'',
    confirmarSenha:''
  }
  console.log(this.formData);



  // chamando a função createForm para limpar os campos na tela
  this.createForm(new NewUser());
}

  //Função de inicializacao do form Reactive Form


// Declação do FormGroup para utilização no Reactive Forms
//register(){
  //console.log('Reactive |Forms');
  //if(this.formNewUser.value.senha ! == this.formNewUser.value.confirmarSenha == this.formNewUser.value.confirmarSenha){
    //window.alert('Dados incorretos');
  //}else{
    //window.alert('ok')
  //}
//}

//Salvando as informaçoes


}


