import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {OAuth2CallbackComponent} from "./component/oauth2-callback/oauth2-callback.component";

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'oauth2/code/azure',
    title: 'Microsoft Login',
    component: OAuth2CallbackComponent
  }
];
