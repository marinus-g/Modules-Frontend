import {booleanAttribute, Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css'
})
export class ProjectCreateComponent {

  @Input({required: true}) public classId: string | undefined
  @Input({required: true}) public moduleId: number | undefined

  protected name: string = '';
  protected description: string = '';

  constructor(private projectService: ProjectService) {
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    if (!this.name || !this.description || !this.classId || !this.moduleId) {
      return
    }
    this.projectService
      .createProject({
        name: this.name,
        description: this.description,
        class_id: this.classId,
        module_id: this.moduleId
      })
      .then(value => {
        if (typeof value === 'string') {
          console.log('Project created at: ' + value)
          window.location.reload()
        }
        if (value === false) {
          console.error('Project creation failed')
        }
      })
  }
}
