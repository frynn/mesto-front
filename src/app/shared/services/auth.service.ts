import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {EditInterface, LoginInterface, RegistrationInterface, UserInterface} from "../interfaces/user.interface";


const ACCESS_TOKEN_KEY = 'access_token';

interface JwtAuth {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  access_token: string;
  profile: UserInterface   | null = null;

  constructor(private readonly http: HttpClient) {
    this.access_token = localStorage.getItem(ACCESS_TOKEN_KEY) || '';
  }

  signIn(payload: LoginInterface): Observable<JwtAuth> {
    return this.http.post<JwtAuth>('http://localhost:3000/auth/signin', payload).pipe(
      tap((res) => {
        this.saveToken(res.access_token)
      })
    )
  }

  signUp(payload: RegistrationInterface): Observable<JwtAuth> {
    return this
      .http
      .post<JwtAuth>('http://localhost:3000/auth/signup', payload)
      .pipe(tap((res) => {
        this.saveToken(res.access_token)
      }));
  }

  private saveToken(token: string) {
    this.access_token = token;
    localStorage.setItem(ACCESS_TOKEN_KEY, this.access_token)
  }

  logout(){
    this.access_token = '';
    this.profile = null;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  isLoggedIn(): boolean{
    return !!this.access_token;
  }

  getProfile(): Observable<UserInterface | null> {
    return this.http.get<UserInterface>('http://localhost:3000/profile')
  }

  editUser(id: number, payload: Partial<EditInterface>): Observable<EditInterface>{
    return this.http.patch<EditInterface>(`http://localhost:3000/users/${id}`, payload)
  }
}
