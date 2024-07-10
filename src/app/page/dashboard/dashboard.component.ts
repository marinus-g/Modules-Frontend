import {Component, OnInit} from '@angular/core';
import {ModuleListComponent} from "../../component/module/module-list/module-list.component";
import {ClassModuleDto} from "../../model/module";
import {ModuleService} from "../../service/module.service";
import {ClassService} from "../../service/class.service";
import {ClassSwitchComponent} from "../../component/class-switch/class-switch.component";
import {SchoolClass} from "../../model/class";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ModuleListComponent,
    ClassSwitchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private moduleService: ModuleService, protected classService: ClassService) {
    this.classService.fetchClass(true)
      .then(value => this.fetchModules())
  }

  ngOnInit(): void {

  }

  protected modules: ClassModuleDto[] = [];

  fetchModules() {
    this.moduleService.getClassModules().then(modules => this.modules = modules)
  }

  handleClassChange(schoolClass: SchoolClass) {
    this.classService.schoolClass = schoolClass;
    this.fetchModules()
  }
}
