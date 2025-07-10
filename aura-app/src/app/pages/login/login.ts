import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import{NgIf} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';


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
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })



  }

  OnSubmit(){
    this.submitted=true;

    if(this.loginForm.valid) return;
      
      this.authService.login();
      this.router.navigate(['/']);
    
  }  

}
