import { Component, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  users = signal<User[]>([]);
  token: string;
  userId: number | string;
  userData: any;

  private userService = inject(UserService);
  private router = inject(Router);

  constructor(private jwtService: JwtHelperService) {
    this.token = JSON.stringify(localStorage.getItem("token"));
  }

  ngOnInit() {
    this.getTodayDate();
    const decodedToken = this.jwtService.decodeToken(this.token);
    this.userId = decodedToken.sub
    console.log("EL ID USER ES", this.userId);
    this.getUserProfile();
  }

  private getUsers() {
    this.userService.getAllUsers()
      .subscribe({
        next: (users) => {
          console.log(users);

          this.users.set(users);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  logout() {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
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

}
