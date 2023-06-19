import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuVisible: boolean = true;
  isOpen = true;




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}



