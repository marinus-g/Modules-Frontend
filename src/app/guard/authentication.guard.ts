import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authenticationGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticated = await authService.isAuthenticated();
  if (!authenticated) {
    console.log('Not authenticated')
    return router.createUrlTree(['/login']);
  }
  return true;
};
