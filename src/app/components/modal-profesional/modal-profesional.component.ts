import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-modal-profesional',
  standalone: true,
  imports: [CommonModule, StarsComponent, ModalProfesionalComponent],
  templateUrl: './modal-profesional.component.html',
  styleUrl: './modal-profesional.component.css'
})
export class ModalProfesionalComponent {
  isVisible = false;

  showModal(){
    this.isVisible = !this.isVisible;
  }
  
}
