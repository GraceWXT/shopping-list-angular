import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navClicked = new EventEmitter<string>();
  collapsed = true;

  onClickNavLink(link: string) {
    this.navClicked.emit(link);
  }
}
