import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hideNav = false;
  hideSidebar = true;

  toggleNav() {
    this.hideNav = !this.hideNav;
  //  console.log("header function");
  }

  toggleSidebar() {
    this.hideSidebar = !this.hideSidebar;
  }
}
