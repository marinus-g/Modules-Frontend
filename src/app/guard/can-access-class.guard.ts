import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {ClassService} from "../service/class.service";

export const canAccessClassGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const classService = inject(ClassService);
  // match the :classId parameter in the route with the current class (/class/:classId/module/:moduleId)
  const classId = route.paramMap.get('classId');
  const isLecturer = await authService.isLecturer();
  if (isLecturer) {
    return true;
  }
  const schoolClass = await classService.fetchClass(true)
  if (!schoolClass || schoolClass.id.toString() !== classId) {
    console.log('No class found')
    return router.createUrlTree(['/']);
  }
    return true;
}
