import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SidemenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
