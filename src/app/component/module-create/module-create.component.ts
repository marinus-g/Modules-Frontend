import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ModuleDto} from "../../model/module";
import {ModuleService} from "../../service/module.service";

@Component({
  selector: 'app-module-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './module-create.component.html',
  styleUrl: './module-create.component.css'
})
export class ModuleCreateComponent {

  protected module: ModuleDto = {
    name: '',
    description: '',
  }

  constructor(private moduleService: ModuleService) {
  }

  @Output("createdModule")
  createdModule: EventEmitter<boolean|string> = new EventEmitter<boolean|string>(true)
  handleSubmit(event: SubmitEvent) {
    console.log("....")
    event.preventDefault()
    this.moduleService.createModule(this.module)
      .then(value => {
        console.log("Value: ", value)
        if (typeof value === "string") {
          console.log("Module created: ", value)
          this.createdModule.emit(value)
          return
        }
        this.createdModule.emit(false)
      })
      .catch(reason => {
        console.error("Error creating module: ", reason)
      })
  }

  cancelSubmit() {
    this.createdModule.emit(false)
  }
}
