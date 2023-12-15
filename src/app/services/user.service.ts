import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User, UserLogin } from '../models/users.model';
// import jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  apiUrl = "https://backendmentesana-production.up.railway.app"

  constructor() { }

  getAllUsers(){
    return this.http.get<User[]>(`${this.apiUrl}/user/users`);
  }

  login(email: string, password: string){
    const queryParams = `email=${email}&password=${password}`;

    const url = `${this.apiUrl}/auth/login?${queryParams}`;
    return this.http.post(url, null);
  }

  logout(){
    localStorage.removeItem("token");
  }

  getUserProfile(id: number | string){
    return this.http.get(`${this.apiUrl}/user/user/${id}`);
  }

  agendarCita(citaData: any){
    return this.http.post(this.apiUrl, citaData);
  }
}
