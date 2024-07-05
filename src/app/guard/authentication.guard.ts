import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticated = authService.isAuthenticated();
  if (!authenticated) {
    return router.createUrlTree(['/login']);
  }
  return true;
};
