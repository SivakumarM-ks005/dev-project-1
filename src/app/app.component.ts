import { Component, NgModule } from '@angular/core';
import {CommonModule} from "@angular/common"
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
    standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dev-project';
  showFiller = true;

  sideNavToggle(){
    if(this.showFiller === true){
    this.showFiller=false;
  } else {
    this.showFiller=true;
  } 
}
}
