import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { StarsComponent } from '../../components/stars/stars.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, LayoutComponent, StarsComponent, FormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  fechaElegida = signal('12-12-2023');
  horaElegida = signal('09:30');
  terapeutaElegido = signal('Terapeuta Hdez. Angelica');

  valueInput = '';

  @ViewChild('hora') hora: ElementRef | undefined;
  valorSpan: string = '8:40';
  valorInput: string = '';

  fechaSeleccionada: string;
  otroInput: string;

  horariosDia = ["8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM"]
  horariosTarde = ["13:30 PM", "14:30 PM", "15:30 PM", "16:30 PM"]
  horariosNoche = ["17:30 PM", "18:30 PM", "19:30 PM", "20:30 PM"]

  userId: any;

  private userService = inject(UserService);
  private router = inject(Router);
  
  constructor() {
    this.fechaSeleccionada = '12/18/2023'; 
    this.actualizarOtroInput();
    this.userId = localStorage.getItem("idUser");
  }
  
  actualizarOtroInput() {
    this.otroInput = this.fechaSeleccionada;
  }

  // Método para asignar el valor del span al input
  asignarValorInput(valor: string) {
    this.valorInput = valor;
  }

  obtenerValorSeleccionado(event: any) {
    const valorSeleccionado = event.target.value;
    console.log(valorSeleccionado);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const formData = {
      patient_id: this.userId,
      price: (event.target as HTMLFormElement)['precio'].value,
      selected_service: (event.target as HTMLFormElement)['servicio'].value,
      session_date: (event.target as HTMLFormElement)['date'].value,
      session_time: (event.target as HTMLFormElement)['time'].value,
      therapist_name: (event.target as HTMLFormElement)['profesional'].value,
    };

    console.log('Haciendo solicitud de agendar...');

    this.userService.agendarCita(formData).subscribe(
      (response) => {
        console.log('Cita agendada:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error al agendar cita:', error);
      }
    );
  }
  
}