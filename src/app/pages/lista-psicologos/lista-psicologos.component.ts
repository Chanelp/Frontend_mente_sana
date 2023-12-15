// psicologos-lista.component.ts
<<<<<<< HEAD
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CardProfesionalComponent } from '../../components/card-profesional/card-profesional.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ModalProfesionalComponent } from '../../components/modal-profesional/modal-profesional.component';
import { Terapeuta } from '../../models/profesional.model';
import { PsicologosService } from '../../services/psicologos.service';
=======
import { Component, Input } from '@angular/core';
>>>>>>> be54cfd9a657bb1ec8642b45125bb813bdae5bf6

@Component({
 selector: 'app-lista-psicologos',
 templateUrl: './lista-psicologos.component.html',
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
          next: (terapeutas) => {
            console.log(terapeutas);
            this.terapeutas.set(terapeutas);
          },
          error: (err) => {
            console.log(err);
          }
        })
    }
}


