import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly token_key = 'auth_token';
  private readonly api_url = 'http://192.168.1.187:5005/api/User/Login()'; 


  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Login 
  login(credentials: { email: string; password: string }) {

    return this.http.post<{ token: string }>(this.api_url, credentials, {
    }).subscribe({
      next: (response: { token: string; }) => {
        this.setToken(response.token);
        this.loggedInSubject.next(true);
      },
      error: (err: any) => {
        console.error('Login failed', err);
      }
    });

  
  }

  signup(credentials: { name:string; email: string; password: string }) {

    return this.http.post<{ token: string }>(this.api_url, credentials, {
    }).subscribe({
      next: (response: { token: string; }) => {
        this.setToken(response.token);
        this.loggedInSubject.next(true);
      },
      error: (err: any) => {
        console.error('Login failed', err);
      }
    });

  
  }
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }
  
  private hasToken(): boolean {
    return this.isBrowser() && !!localStorage.getItem(this.token_key);
  }
  
  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.token_key, token);
    }
  }
  
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.token_key);
    }
  }
  
  isAuthenticated():boolean{
    return this.hasToken();
  } 
}