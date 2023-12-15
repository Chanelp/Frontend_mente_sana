import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsService } from '../../service-user-settings/user-settings.service';
import { NgForm } from '@angular/forms'; 
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'] 
})
export class UserSettingsComponent {

  formData = {
    date: '', 
    email: '',
    gender: '',
    apellido: '',
    nombre: '',
    pass: ''
  };

  constructor(private userSettingsService: UserSettingsService){}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const userData = {
        date_birth: this.formData.date || '',
        email: this.formData.email || '',
        genre: this.formData.gender || '',
        last_name: this.formData.apellido || '',
        name: this.formData.nombre || '',
        password: this.formData.pass || '',
        rol: 'User'
      };

      this.userSettingsService.updateUser(userData).subscribe(
        (response) => {
          console.log('Usuario actualizado:', response);
        },
        (error) => {
          console.error('Error al actualizar usuario:', error);
        }
      );
    }
  }
}

