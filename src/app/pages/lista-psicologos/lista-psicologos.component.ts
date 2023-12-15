// psicologos-lista.component.ts
import { Component, Input } from '@angular/core';
import { CardProfesionalComponent } from '../../components/card-profesional/card-profesional.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ModalProfesionalComponent } from '../../components/modal-profesional/modal-profesional.component';

@Component({
 selector: 'app-lista-psicologos',
 templateUrl: './lista-psicologos.component.html',
 standalone: true,
 imports: [CommonModule, LayoutComponent, CardProfesionalComponent, ModalProfesionalComponent],
 styleUrls: ['./lista-psicologos.component.css']
})
export class PsicologosListaComponent {
 @Input() psicologo: any;
}


