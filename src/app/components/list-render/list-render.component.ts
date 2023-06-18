import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  patient= [
    {nomeCompleto: 'Fernanda Linhares', idade: 43, contato: 99997-3785, email: 'fernanda_linhares@gmail.com'},
    {nomeCompleto: 'Guilherme Stulp', idade: 6, contato: 98765-3305, email: 'guistulp@gmail.com'},
    {nomeCompleto: 'Joaca Schequepah', idade: 8, contato: 984059876, email: 'joaca@hotmail.com'},
    {nomeCompleto: 'Gabriela Barros', idade: 30, contato: 99976555, email: 'gabi_barros@gmail.com'},
    {nomeCompleto: 'Noah Klein', idade: 24, contato: 984546372, email: 'noahklein@bol.com'},
    {nomeCompleto: 'Emanoel Silva' ,idade: 17, contato: 992134576, email:'manu@yahoo.com'},
  ]

constructor(
  private patientsService: PatientsService,
  private patients: PatientsService,
  private localStorage:LocalStorageService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
