// psicologos-lista.component.ts
import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-lista-psicologos',
 templateUrl: './lista-psicologos.component.html',
 styleUrls: ['./lista-psicologos.component.css']
})
export class PsicologosListaComponent {
 @Input() psicologo: any;
}


