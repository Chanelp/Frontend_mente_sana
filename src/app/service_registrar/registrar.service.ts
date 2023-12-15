import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  apiUrl = 'https://backendmentesana-production.up.railway.app/therapy/new-therapy'; 

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}