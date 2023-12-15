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

  obtenerPsicologos(limit: number | string) {
    return this.http.get<Terapeuta[]>(`${this.apirURL}/therapist/therapists/}?limit=${limit}`);
  }
}
