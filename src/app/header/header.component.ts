import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navClicked = new EventEmitter<string>();
  collapsed = true;

  onClickRecipes() {
    this.navClicked.emit('Recipes');
  }

  onClickShoppingList() {
    this.navClicked.emit('Shopping List');
  }
}
