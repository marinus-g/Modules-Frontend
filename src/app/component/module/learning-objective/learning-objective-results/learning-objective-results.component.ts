import {Component, Input, OnInit} from '@angular/core';
import {ExamService} from "../../../../service/exam.service";
import {ClassModuleDto} from "../../../../model/module";
import {Exam, State} from "../../../../model/exam";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'module-learning-objective-results',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './learning-objective-results.component.html',
  styleUrl: './learning-objective-results.component.css'
})
export class LearningObjectiveResultsComponent implements OnInit {

  @Input({required: true})
  classModuleDto: ClassModuleDto | undefined;
  @Input({required: true})
  exam: Exam | undefined;

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
    if (!this.classModuleDto?.exam_id) {
      return;
    }
  }

  getStateDescription(state: State) {
    return state === State.SUBMITTED ? 'Eingereicht' : 'Nicht eingereicht';
  }
}
