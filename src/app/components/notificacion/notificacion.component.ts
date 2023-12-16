import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsicologosService } from '../../services/psicologos.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  sesiones:any = signal([]);
  userId: any;

  private sesionService = inject(UserService);

  ngOnInit(): void {
    this.userId = localStorage.getItem("idUser");
    console.log(this.userId);
    
    this.getSesiones(this.userId);
  }

  getSesiones(id: any){
    this.sesionService.obtenerSesiones(id)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.sesiones.set(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
