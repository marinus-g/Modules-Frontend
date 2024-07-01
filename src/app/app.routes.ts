import { Routes } from '@angular/router';
import {ModuleDetailComponent} from "./module-detail/module-detail.component";

export const routes: Routes = [
  { path: 'detail/:id', component: ModuleDetailComponent },
];
