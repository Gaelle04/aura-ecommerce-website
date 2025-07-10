import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedin = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedin.asObservable();

  login() {
    this.loggedin.next(true);

  }

  logout(){
    this.loggedin.next(false);
  }

  constructor() { }
}
