import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token_key = 'auth_token';
  private readonly loginUrl = 'http://192.168.7.156:5005/api/User/Login()';
  private readonly signupUrl = 'http://192.168.7.156:5005/api/User/SignUp()';
  private readonly current_email_key ='current_email';
  //private readonly ADMIN_emial= "gaelleetohme2004@gmail.com";

  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean): void {
    this.loggedInSubject.next(value);
  }

  login(credentials: { Username: string; Password: string }) {
    return this.http.post<any>(this.loginUrl, credentials);
  }

  signup(credentials: {Firstname: string;Lastname:string,  Email: string; Password: string , RoleName?:string}) {
    return this.http.post<{data: { id: number }}>(this.signupUrl, credentials);
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

  getToken(): string | null {
   // return null;
    return this.isBrowser() ? localStorage.getItem(this.token_key) : null;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.token_key);
      this.clearCurrenTEmail();
      this.setLoggedIn(false);

    }
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  setCurrentEmail(email:string):void{
    if(this.isBrowser()){
      localStorage.setItem(this.current_email_key, email);
    }
  }

  getCurrentEmail(): string | null{
   return this.isBrowser() ? localStorage.getItem(this.current_email_key): null;

  }

  clearCurrenTEmail():void{
    if(this.isBrowser()){
      localStorage.removeItem(this.current_email_key);
    }
  }

  isAdmin():boolean{
    const currentEmail = this.getCurrentEmail();
    return currentEmail ==='gaelle.admin@gmail.com';
  }
  
}
