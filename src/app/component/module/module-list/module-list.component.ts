import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ClassModuleDto, ModuleDto} from "../../../model/module";
import {NgComponentOutlet, NgForOf, NgTemplateOutlet} from "@angular/common";
import {AuthService} from "../../../service/auth.service";
import {FormsModule} from "@angular/forms";
import {ModuleCreateComponent} from "../module-create/module-create.component";
import {ModuleService} from "../../../service/module.service";
import {ClassService} from "../../../service/class.service";
import {ModuleListEntryComponent} from "./module-list-entry/module-list-entry.component";

@Component({
  selector: 'app-module-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    ModuleCreateComponent,
    ModuleListEntryComponent,
    NgTemplateOutlet,
    NgComponentOutlet
  ],
  templateUrl: './module-list.component.html',
  styleUrl: './module-list.component.css'
})
export class ModuleListComponent implements OnInit {

  @Input({
    required: true
  })
  public modules: ClassModuleDto[] = [];
  public allModules: ModuleDto[] = [];
  protected isLecturer: boolean = false;
  protected _createModule: boolean = false;
  selectedModule: ModuleDto | string = 'add';

  constructor(protected authService: AuthService,
              private moduleService: ModuleService, private classService: ClassService) {
  }

  ngOnInit(): void {
    this.authService.isLecturer()
      .then(value => this.isLecturer = value)
      .then(value => {
        if (value) {
          this.moduleService.fetchAllModules().then(modules => {
            this.allModules = modules;
          });
        }
      })
  }

  createModule() {
    this._createModule = true;
  }

  handleAddModule(selectedModule: ModuleDto | string) {
    if (selectedModule === 'create') {
      this.createModule();
      return;
    }
    if (typeof selectedModule === 'string') {
      return;
    }
    this.classService.addModuleToClass(selectedModule, this.classService.schoolClass)
      .then(location => {
        this.selectedModule = "add"
        if (location) {
          this.moduleService.fetchClassModuleFromLocation(location).then(module => {
            this.modules.push(module);
          })
        }
      })
  }

  handleModuleCreate($event: boolean | string) {
    if ($event === false) {
      this._createModule = false;
      return;
    }
    if (typeof $event === 'string') {
      this.moduleService.fetchModuleAtLocation($event).then(module => {
        this.allModules.push(module)
        this._createModule = false;
      });
      return;
    }
  }

  filteredAllModules() {
    return this.allModules.filter(value => {
      return !this.modules.find(module => module.data.id === value.id);
    })
  }
}
