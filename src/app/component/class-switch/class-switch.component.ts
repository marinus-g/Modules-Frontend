import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import {SchoolClass} from '../../model/class';
import {ClassService} from "../../service/class.service";
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-class-switch',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './class-switch.component.html',
  styleUrl: './class-switch.component.css'
})
export class ClassSwitchComponent implements OnInit {

  public selectedClass: SchoolClass | string = "Klasse"
  public schoolClasses: SchoolClass[] = [];
  @Output() valueChanged = new EventEmitter<SchoolClass>();

  constructor(private authService: AuthService, private classService: ClassService) {
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().then(value => {
      console.log("Authenticated: ", value)
      this.classService.fetchClasses()
        .then(value1 => {
          console.log("returned Classes: ", value1)
          return value1

        })
        .then(classes => this.schoolClasses = classes)
        .then(() => {
          console.log("Classes: ", this.schoolClasses)
          this.classService.fetchClass(false)
            .then(value1 => {
              console.log("Selected class: ", value1)
              return value1
            })
            .then(schoolClass => this.selectedClass = this.schoolClasses.find(c => c.id === schoolClass.id) || "Klasse")
        })
    })
  }


  handleClassChange() {
    if (typeof this.selectedClass === "string") {
      return
    }
    this.valueChanged.emit(this.selectedClass)
  }
}
