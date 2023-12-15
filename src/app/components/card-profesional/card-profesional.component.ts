import { Component, Input } from '@angular/core';
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

  @Input() terapeuta: any;
  //@Input() index: any = 0;

  isVisible = false;

  showModal(){
    this.isVisible = !this.isVisible;
  }

  getImagenUrl(index: number): string {
    return `assets/images/tera${index + 1}.jpg`;
  }
}
