import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import Register from '../Interfaces/register';
import Login from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient)


  constructor() { }

  register(data: Register): Observable<Register> {
    return this.httpClient.post<Register>('http://localhost:3001/user', data)
  }
  login(data: Login): Observable<Login> {
    return this.httpClient.post<Login>('http://localhost:3001/login', data)
  }
}
