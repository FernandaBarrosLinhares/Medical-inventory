import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Consult } from 'src/app/info-patients/shared/consult';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent implements OnInit{
  formConsult! : FormGroup;
  BotaoEditar = false;
  BotaoCadastrar = true;

  constructor(){

  }
  ngOnInit() {

  }
  createForm(consult: Consult){
    this.formConsult = new FormGroup({
      motivoConsulta: new FormGroup (consult.motivoConsulta, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(64),
      ] ),
      data: new FormGroup (consult.data,[Validators.required]),
      horario: new FormGroup (consult.hora, [Validators.required]),
      descricaoProblema: new FormGroup (consult.descricao,[
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(1024),
      ] ),
      medicacaoReceitada: new FormGroup (consult.medicacao, [Validators.required]),
      dosagem: new FormGroup (consult.dosagem,[
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(256),
      ])
    });
  }
}

