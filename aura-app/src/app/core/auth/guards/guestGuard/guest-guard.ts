import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const guestGuard: CanActivateFn = (route: any, state: any) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true; 
  } else {
    router.navigate(['/']); 
    return false;
  }
};
