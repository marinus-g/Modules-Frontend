import {Component, Input} from '@angular/core';
import {Exam, State} from "../../../../model/exam";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-learning-objective-result',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './learning-objective-result.component.html',
  styleUrl: './learning-objective-result.component.css'
})
export class LearningObjectiveResultComponent {


  @Input({required: true})
  exam: Exam | undefined;

  constructor() {
  }

  get getExamResult() {
    if (!this.exam) {
      return undefined;
    }
    const results = this.exam.exam_results;
    if (!results || results.length === 0) {
      return undefined;
    }
    return results[0];
  }

  get getMaxScore() {
    if (!this.exam) {
      return undefined;
    }
    return this.exam?.max_score
  }

  get getStateDescription() {
    const exam = this.getExamResult;
    return exam && exam.state === State.SUBMITTED ? 'Eingereicht' : 'Nicht eingereicht';
  }
}
