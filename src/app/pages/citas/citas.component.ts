import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { StarsComponent } from '../../components/stars/stars.component';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, LayoutComponent, StarsComponent],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  
}