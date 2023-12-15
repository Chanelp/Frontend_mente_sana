import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private apiUrl = 'https://backendmentesana-production.up.railway.app/user/user/1'; 

  constructor(private http: HttpClient) { }

  updateUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}/Users/update_user_user_user__id__put`; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, userData, { headers });
  }
}
