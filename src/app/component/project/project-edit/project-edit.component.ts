import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../../service/project.service";
import Project from "../../../model/project";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.css'
})
export class ProjectEditComponent implements OnInit{

  @Input('projectId') public projectId: number | undefined;

  protected name: string = '';
  protected description: string = '';

  protected project: Project = {
    id: 0,
    name: '',
    description: '',
    class_id: '',
    module_id: 0
  }

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    if (!this.projectId) {
      return
    }
    this.projectService.getProject(this.projectId)
      .then(project => {
        if (project) {
          this.project = project
          this.name = project.name
          this.description = project.description
        }
      })

  }

  handleProjectEditSubmit($event: SubmitEvent) {
    $event.preventDefault();
    console.log('Project edited');
  }
}
