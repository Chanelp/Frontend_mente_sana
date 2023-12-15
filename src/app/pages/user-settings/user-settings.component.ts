import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, LayoutComponent, SidemenuComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {

}
