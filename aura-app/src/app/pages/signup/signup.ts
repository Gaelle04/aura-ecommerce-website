import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import{NgIf} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { passwordHasNumberValidator } from '../../validators/password-has-number';
import { matchPasswords } from '../../validators/match-password';



@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})

export class Signup {

 

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }
  
  signupForm!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordHasNumberValidator]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: matchPasswords('password', 'confirmPassword') 
      }
    );
  }

  OnSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) return;

    const { name, email, password } = this.signupForm.value;
    this.authService.signup({ name, email, password });
    this.router.navigate(['/login']);
  }

}

