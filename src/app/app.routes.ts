import { Routes } from '@angular/router';
import {ModuleDetailComponent} from "./module-detail/module-detail.component";
import {ModuleViewComponent} from "./module-view/module-view.component";

export const routes: Routes = [
  { path: 'modules', component: ModuleViewComponent},
  { path: 'detail/:id', component: ModuleDetailComponent },
];
