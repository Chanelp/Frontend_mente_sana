import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProfesionalComponent } from '../modal-profesional/modal-profesional.component';

@Component({
  selector: 'app-card-profesional',
  standalone: true,
  imports: [CommonModule, ModalProfesionalComponent],
  templateUrl: './card-profesional.component.html',
  styleUrl: './card-profesional.component.css'
})
export class CardProfesionalComponent {
  isVisible = false;

  showModal(){
    this.isVisible = !this.isVisible;
  }
}
