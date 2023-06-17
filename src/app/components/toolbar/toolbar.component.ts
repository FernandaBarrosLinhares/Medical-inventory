import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  toolbarVisible: boolean = true;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
