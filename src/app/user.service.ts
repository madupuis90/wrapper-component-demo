import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '/api/user';

  constructor(private http: HttpClient) { }

  // Fetch all users from the API
  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

  // Update a user's information on the API
  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<User>(`${this.apiUrl}`, JSON.stringify(user), { headers });
  }


  // Update a user's information on the API
  patchUser(user: Partial<User>): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<User>(`${this.apiUrl}`, JSON.stringify(user), { headers });
  }


}