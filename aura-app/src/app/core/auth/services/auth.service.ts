import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token_key = 'auth_token';
  private readonly loginUrl = 'http://192.168.1.187:5005/api/User/Login';
  private readonly signupUrl = 'http://192.168.1.187:5005/api/User/Register';

  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean): void {
    this.loggedInSubject.next(value);
  }

  login(credentials: { Email: string; Password: string }) {
    return this.http.post<{ token: string }>(this.loginUrl, credentials);
  }

  signup(credentials: {Firstname: string;Lastname:string,  Email: string; Password: string , RoleName:string}) {
    return this.http.post<{ token: string }>(this.signupUrl, credentials);
  }

  private isBrowser(): boolean {
    //return true;
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  private hasToken(): boolean {
   // return true;
    return this.isBrowser() && !!localStorage.getItem(this.token_key);
  }

  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.token_key, token);
    }
  }

  getToken(): string | null {
   // return null;
    return this.isBrowser() ? localStorage.getItem(this.token_key) : null;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.token_key);
      this.setLoggedIn(false);
    }
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }
}
