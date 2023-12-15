import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarService } from '../../service_registrar/registrar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private registrarService: RegistrarService, private router: Router) { }

  onSubmit(event: Event) {
    event.preventDefault();

    const formData = {
      name: (event.target as HTMLFormElement)['nombre'].value,
      last_name: (event.target as HTMLFormElement)['apellido'].value,
      email: (event.target as HTMLFormElement)['email'].value,
      password: (event.target as HTMLFormElement)['pass'].value,
      date_birth: (event.target as HTMLFormElement)['date'].value,
      genre: 'Género',
      rol: 'User'
    };

    console.log('Haciendo solicitud de registro...');

    this.registrarService.registerUser(formData).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
