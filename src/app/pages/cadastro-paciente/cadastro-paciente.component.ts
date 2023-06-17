import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/info-patients/shared/patient';
import { LocalStorageService } from 'src/app/local-storage.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {
  formPatient! : FormGroup;
    BotaoEditar = false;
    BotaoCadastrar = true;

  constructor(){
    privateStorage: LocalStorageService
  }
  ngOnInit(){

  }

  createForm(patient: Patient){
    this.formPatient = new FormGroup({
      nomeComleto: new FormGroup (patient.nomeCompleto, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ] ),
      genero: new FormGroup (patient.genero,[Validators.required]),
      dataNascimento: new FormGroup (patient.dataNascimento,[Validators.required]),
      cpf: new FormGroup (patient.cpf,[Validators.required]),
      orgaoExpedidor: new FormGroup (patient.orgaoExpedidor,[Validators.required, Validators.maxLength(20)]),
      rg: new FormGroup (patient.rg,[Validators.maxLength(20)]),
      estadoCivil: new FormGroup (patient.estadoCivil,[Validators.required]),
      telefone: new FormGroup (patient.telefone,[Validators.required]),
      email: new FormGroup (patient.email,[Validators.email]),
      naturalidade: new FormGroup (patient.naturalidade),
      contatoEmergencia: new FormGroup (patient.contatoEmergencia),


    })
  }
  onSubmit(){
    console.log(this.formPatient.value);
  }

  editar() {


}
}
