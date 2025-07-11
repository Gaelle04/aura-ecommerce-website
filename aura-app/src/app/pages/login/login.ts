import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import{NgIf} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
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

  constructor(private formBuilder : FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordHasNumberValidator]]
    })



  }

  OnSubmit() {
    this.submitted = true;
  
    if (this.loginForm.invalid) return;
  
    const { email, password } = this.loginForm.value;
  
    this.authService.login({ email, password });
    this.router.navigate(['/']);
  }
  

}
