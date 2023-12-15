import { Component, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { PsicologosService } from '../../services/psicologos.service';
import { Terapeuta } from '../../models/profesional.model';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  imports: [
    CommonModule,
    SidemenuComponent,
    LayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  users = signal<User[]>([]);
  terapeutas = signal<Terapeuta[]>([]);
  token: string;
  userId: number | string;
  userData: any = {
    name: "Chanel",
    last_name: "Paredes",
    email: "chanel@gmail.com"
  };

  private userService = inject(UserService);
  private terapeutaService = inject(PsicologosService);
  private router = inject(Router);

  constructor(private jwtService: JwtHelperService) {
    this.token = JSON.stringify(localStorage.getItem("token"));
  }

  ngOnInit() {
    this.getTodayDate();
    this.getProfesionales();

    const decodedToken = this.jwtService.decodeToken(this.token);
    this.userId = decodedToken.sub
    
    this.getUserProfile();
  }

  private getProfesionales(){
    this.terapeutaService.obtenerPsicologos()
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

  getUserProfile() {
    this.userService.getUserProfile(this.userId)
      .subscribe({
        next: (data) => {
          this.userData = data;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  getTodayDate() {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const formattedDate = `${hour}:${minute} PM Today ${month}/${day}/${year}`;
    return formattedDate;
  }

  getImagenUrl(index: number): string {
    // Supongamos que tus imágenes están en la carpeta assets y siguen el patrón tera1.jpg, tera2.jpg, ...
    return `assets/images/tera${index + 1}.jpg`;
  }

}
