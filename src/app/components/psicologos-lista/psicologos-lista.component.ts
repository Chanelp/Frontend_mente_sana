// psicologos-lista.component.ts
import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-psicologos-lista',
 templateUrl: './psicologos-lista.component.html',
 styleUrls: ['./psicologos-lista.component.css']
})
export class PsicologosListaComponent {
 @Input() psicologo: any;
}


