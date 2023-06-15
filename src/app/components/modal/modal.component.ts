import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
modal = new ModalComponent
  constructor()
{}

ngOnInit(): void {}

showModal(){
  console.log('showModal')
 }


}








