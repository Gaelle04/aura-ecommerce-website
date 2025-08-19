import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import { passwordHasNumberValidator } from '../../validators/password-has-number';
import { matchPasswords } from '../../validators/match-password';
import {OnInit} from '@angular/core';



@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})

export class Signup implements OnInit {




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
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordHasNumberValidator]],
        confirmPassword: ['', Validators.required], 
        rolename: ['user'],
      },
      {
        validators: matchPasswords('password', 'confirmPassword') 
      }
    );
  }

  OnSubmit() {

    this.submitted = true;

    if (this.signupForm.invalid) return;

    const { firstname,lastname,  email, password, rolename } = this.signupForm.value;
    const payload = {
      Firstname: firstname,
      Lastname: lastname,
      Email: email,
      Password: password,
      RoleName: rolename
    };
    
    this.authService.signup(payload).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Signup failed', err);
      }
    });
  }

}

