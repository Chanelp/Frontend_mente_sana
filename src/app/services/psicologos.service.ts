import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Terapeuta } from '../models/profesional.model';

@Injectable({
  providedIn: 'root'
})
export class PsicologosService {
  private http = inject(HttpClient);
  apirURL: string = "https://backendmentesana-production.up.railway.app"

  constructor() { }

<<<<<<< HEAD
  obtenerPsicologos(limit: number | string) {
    return this.http.get<Terapeuta[]>(`${this.apirURL}/therapist/therapists/}?limit=${limit}`);
=======
  obtenerPsicologos() {
    return this.http.get<Terapeuta[]>(`${this.apirURL}/therapist/therapists/}?limit=4`);
>>>>>>> be54cfd9a657bb1ec8642b45125bb813bdae5bf6
  }
}
