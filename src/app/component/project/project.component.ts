import {Component, Input} from '@angular/core';
import {ClassModuleDto} from "../../model/module";
import {ProjectCreateComponent} from "./project-create/project-create.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";
import {ProjectViewComponent} from "./project-view/project-view.component";
import {TeamListComponent} from "./project-edit/team-list/team-list.component";
import {TeamCreateComponent} from "./project-edit/team-create/team-create.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    TeamListComponent,
    TeamCreateComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input({required: true}) public isLecturer: boolean = false
  @Input({required: true}) public classModule: ClassModuleDto | undefined;


}
