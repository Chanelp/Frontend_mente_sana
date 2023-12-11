import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/users.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  userService = inject(UserService);
  router = inject(Router);

  login() {
    this.userService.login(this.email, this.password).subscribe({
      next: (data:any) => {
        console.log("INICIO DE SESION EXITOSO: ", data);
        localStorage.setItem("token", data.token)
        this.router.navigateByUrl('/home');
      },
      error: error => {
        console.log(error.error);
      }
    })
  }

}
