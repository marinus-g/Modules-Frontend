import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleService} from "../../../service/module.service";
import {ClassService} from "../../../service/class.service";
import {ClassModuleDto} from "../../../model/module";
import {SchoolClass} from "../../../model/class";
import {AuthService} from "../../../service/auth.service";
import {
  LearningObjectUploadComponent
} from "../../../component/module/learning-object-upload/learning-object-upload.component";

@Component({
  selector: 'module-view',
  standalone: true,
  imports: [
    LearningObjectUploadComponent
  ],
  templateUrl: './module-view.component.html',
  styleUrl: './module-view.component.css'
})
export class ModuleViewComponent {

  protected classModuleDto: ClassModuleDto = {
    data: {
      id: 0,
      name: '',
      description: ''
    },
    class_id: 0,
    start_date: 'Unknown'
  };
  protected schoolClass: SchoolClass = {
    id: 0,
    name: ''
  }
  protected isLecturer: boolean = false;
  constructor(route: ActivatedRoute,
              private moduleService: ModuleService,
              private classService: ClassService,
              private router: Router,
              private authService: AuthService) {
    route.paramMap.subscribe(params => {
      this.extractParams(params);
    });
  }

  private extractParams(params: any) {
    const classId = params.get('classId');
    const moduleId = params.get('moduleId');
    if (classId === null || moduleId === null || !classId.match(/^[0-9]+$/) || !moduleId.match(/^[0-9]+$/)) {
      this.router.navigate(['/'])
        .catch(reason => console.error(reason));
      return;
    }
    this.moduleService
      .fetchClassModuleFromLocation('/class/' + classId + '/module/' + moduleId)
      .then(module => {
        this.classModuleDto = module;
      })
      .then(value => {
        this.classService.fetchClassById(classId, true)
          .then(schoolClass => {
            this.schoolClass = schoolClass;
          })
      })
    this.authService.isLecturer().then(value => this.isLecturer = value)
  }

  openCreateLearningObjective() {
  }
}
