import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuId: any = 0;

  displayMenu(menuId: any){
    this.menuId = menuId

  }

}
