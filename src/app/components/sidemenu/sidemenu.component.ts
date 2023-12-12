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
  
  logout() {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
