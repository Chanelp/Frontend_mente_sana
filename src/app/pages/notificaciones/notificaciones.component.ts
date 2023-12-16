import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { NotificacionComponent } from '../../components/notificacion/notificacion.component';
import { PsicologosService } from '../../services/psicologos.service';
import { UserService } from '../../services/user.service';
import { Terapeuta } from '../../models/profesional.model';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule, LayoutComponent, NotificacionComponent],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent {

  // sesiones:any = signal([]);
  // userId = localStorage.getItem("userId");
  // terapeutas = signal<Terapeuta[]>([]);
  // userData: any;

  // // private sesionService = inject(UserService);
  // private userService = inject(UserService);
  // private terapeutaService = inject(PsicologosService);

  // ngOnInit(): void {
  //   //this.getSesiones();
  //   this.getProfesionales();
  // }

  // // getSesiones(){
  // //   this.sesionService.obtenerSesiones(this.userId)
  // //   .subscribe({
  // //     next: (data) => {
  // //       console.log(data);
  // //       this.sesiones.set(data);
  // //     },
  // //     error: (err) => {
  // //       console.log(err);
  // //     }
  // //   })
  // // }

  // private getProfesionales(){
  //   this.terapeutaService.obtenerPsicologos(5)
  //   .subscribe({
  //     next: (terapeutas) => {
  //       console.log(terapeutas);
  //       this.terapeutas.set(terapeutas);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  // getUserProfile() {
  //   this.userService.getUserProfile(this.userId)
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         this.userData = data;
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     })
  // }
}
