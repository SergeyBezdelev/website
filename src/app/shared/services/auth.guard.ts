import { inject } from '@angular/core';
import { Router } from '@angular/router';



export const AuthGuard = () => {

  const router = inject(Router);

  if (window.localStorage.getItem('user')) {
    return true;
  }

  return router.parseUrl('/auth/login');
};