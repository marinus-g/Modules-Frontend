import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import {SchoolClass} from '../../model/class';
import {ClassService} from "../../service/class.service";
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgForOf} from "@angular/common";

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

  constructor(private classService: ClassService) {
  }

  ngOnInit(): void {
    this.classService.fetchClasses()
      .then(classes => this.schoolClasses = classes)
      .then(() => {
        this.classService.fetchClass(false)
          .then(schoolClass => this.selectedClass = this.schoolClasses.find(c => c.id === schoolClass.id) || "Klasse")
      })
  }


  handleClassChange() {
    if (typeof this.selectedClass === "string") {
      return
    }
    this.valueChanged.emit(this.selectedClass)
  }
}
