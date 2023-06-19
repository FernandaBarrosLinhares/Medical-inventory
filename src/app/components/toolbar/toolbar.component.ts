import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  //usando a interpolação para passar os dados
 // doctor: string = "user";

 //usando @Input
 @Input() user: string= ''

  toolbarVisible: boolean = true;

  constructor(
    private localStorage: LocalStorageService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
