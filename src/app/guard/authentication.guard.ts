import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../Service/auth/auth.service";

export const authenticationGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticated = await authService.isAuthenticated();
  if (!authenticated) {
    console.log('Not authenticated')
    return router.createUrlTree(['/login']);
  } else {
    if (state.url === '/login') {
      return router.createUrlTree(['modules']);
    }
  }
  return true;
};
