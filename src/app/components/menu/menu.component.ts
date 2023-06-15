import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
showMenu: boolean | undefined;

show(): void{
  this.showMenu = !this.showMenu; //toggle
}

}



