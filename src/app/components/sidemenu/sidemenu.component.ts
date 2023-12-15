import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  private router = inject(Router);
  home(){
    console.log("Home");
    this.router.navigateByUrl("/home");
  }
  calendar(){
    console.log("Citas");
    this.router.navigateByUrl("/citas")
  }
  professionals(){
    console.log("Profesionales");
    this.router.navigateByUrl("/profesionales")
  }
  notifications(){
    console.log("Notificaciones");
    this.router.navigateByUrl("/escribir direccion")
  }
  settings(){
    console.log("Ajustes");
    this.router.navigateByUrl("/user-settings")
  }
  logout() {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
