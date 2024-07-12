import {Component, Input} from '@angular/core';
import {ClassModuleDto} from "../../../../model/module";
import {Router} from "@angular/router";
import {ClassService} from "../../../../service/class.service";

@Component({
  selector: '[app-module-list-entry]',
  standalone: true,
  imports: [],
  styleUrl: './module-list-entry.component.css',
  template: `
        <td (click)="openModulePage()">{{ module.data.name }}</td>
        <td (click)="openModulePage()">{{ module.start_date }}</td>
     `
})
export class ModuleListEntryComponent {

  @Input({required: true}) public module: ClassModuleDto = {
    id: 0,
    class_id: '',
    start_date: '',
    data: {
      name: '',
      description: ''
    }
  }

  constructor(private classService: ClassService, private router: Router) {
  }

  openModulePage() {
    if (!this.classService.schoolClass) {
      return;
    }
    if (!this.module || !this.module.data) {
      return;
    }
    this.router.navigateByUrl(this.router.createUrlTree([
      '/class',
      this.classService.schoolClass.id,
      'module',
      this.module.data.id
    ]))
      .catch(reason => {
        console.error(reason);
      })
  }
}
