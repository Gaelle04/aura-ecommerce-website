import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {inject} from '@angular/core';

export const authGuardGuard: CanActivateFn = (route: any, state: any) => {
  const authService=inject(AuthService);
  const router = inject(Router);

   const ADMIN_EMAIL = 'ali.admin@gmail.com';
   const current_email= authService.getCurrentEmail();

   if(current_email && current_email.toLocaleLowerCase() ===ADMIN_EMAIL.toLocaleLowerCase()){
    return true;
   }

  else{
    router.navigate(['/login']);
    return false;
  }
  
};
