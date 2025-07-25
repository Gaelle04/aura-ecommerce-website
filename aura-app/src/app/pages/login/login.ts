import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import{NgIf} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import { passwordHasNumberValidator } from '../../validators/password-has-number';



@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {
  loginForm: FormGroup;
  submitted = false;
  loginError: string | null = null;

  constructor(private formBuilder : FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordHasNumberValidator]]
    })



  }

  OnSubmit() {
    this.submitted = true;
    this.loginError = null;
  
    if (this.loginForm.invalid) return;
  
    const { email, password } = this.loginForm.value;
    const payload ={
      Username:email,
      Password: password
    }
  
    this.authService.login(payload).subscribe({
      next: (response: { token: string }) => {
        this.authService.setToken(response.token);
        this.authService.setLoggedIn(true);  
        this.router.navigate(['/']);
      },
      error: () => {
        this.loginError = 'Invalid username or password';
      }
    }); 
  }
}
