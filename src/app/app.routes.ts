import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {OAuth2CallbackComponent} from "./component/oauth2-callback/oauth2-callback.component";
import {authenticationGuard} from "./guard/authentication.guard";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {ModuleViewComponent} from "./page/module/module-view/module-view.component";
import {canAccessClassGuard} from "./guard/can-access-class.guard";

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'login/oauth2/code',
    title: 'Microsoft Login',
    component: OAuth2CallbackComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: '',
    title: 'Dashboard',
    canActivate: [authenticationGuard],
    component: DashboardComponent
  },
  {
    // /class/:classId/module/:moduleId
    path: 'class/:classId/module/:moduleId',
    title: 'Module',
    canActivate: [authenticationGuard, canAccessClassGuard],
    component: ModuleViewComponent
  }
];
