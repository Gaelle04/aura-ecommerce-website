import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router = inject(Router);

   const ADMIN_EMAIL = 'gaelle.admin@gmail.com';
   const current_email= authService.getCurrentEmail();

   if(current_email && current_email.toLocaleLowerCase() ===ADMIN_EMAIL.toLocaleLowerCase()){
    return true;
   }

  else{
    router.navigate(['/login']);
    return false;
  }
};
