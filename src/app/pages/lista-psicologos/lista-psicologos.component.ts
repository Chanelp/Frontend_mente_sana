// psicologos-lista.component.ts
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CardProfesionalComponent } from '../../components/card-profesional/card-profesional.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ModalProfesionalComponent } from '../../components/modal-profesional/modal-profesional.component';
import { Terapeuta } from '../../models/profesional.model';
import { PsicologosService } from '../../services/psicologos.service';

@Component({
 selector: 'app-lista-psicologos',
 templateUrl: './lista-psicologos.component.html',
 standalone: true,
 imports: [CommonModule, LayoutComponent, CardProfesionalComponent],
 styleUrls: ['./lista-psicologos.component.css']
})
export class PsicologosListaComponent implements OnInit{

    terapeutas = signal<Terapeuta[]>([]);

    terapeutaService = inject(PsicologosService);

    ngOnInit(): void {
      this.getProfesionales();
    }

    private getProfesionales(){
        this.terapeutaService.obtenerPsicologos(8)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.terapeutas.set(data);
          },
          error: (err) => {
            console.log(err);
          }
        })
    }

    getImagenUrl(index: number): string {
      // Supongamos que tus imágenes están en la carpeta assets y siguen el patrón tera1.jpg, tera2.jpg, ...
      return `assets/images/tera${index + 1}.jpg`;
    }
}


