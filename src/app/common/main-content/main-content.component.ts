import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-main-content',
  imports: [NgClass],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
@Input() hideNav: any
}
