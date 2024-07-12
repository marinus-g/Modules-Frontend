import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {LearningObjectiveUploadComponent} from "./learning-object-upload/learning-objective-upload.component";
import {LearningObjectiveResultsComponent} from "./learning-objective-results/learning-objective-results.component";
import {ClassModuleDto} from "../../../model/module";
import {ExamService} from "../../../service/exam.service";
import {Exam} from "../../../model/exam";
import {LearningObjectiveResultComponent} from "./learning-objective-result/learning-objective-result.component";

@Component({
  selector: 'app-learning-objective',
  standalone: true,
  imports: [
    NgIf,
    LearningObjectiveUploadComponent,
    NgSwitchCase,
    NgSwitch,
    LearningObjectiveResultsComponent,
    LearningObjectiveResultComponent
  ],
  templateUrl: './learning-objective.component.html',
  styleUrl: './learning-objective.component.css'
})
export class LearningObjectiveComponent implements OnInit {

  @Input({required: true}) public isLecturer: boolean = false
  @Input({required: true}) public classModule: ClassModuleDto | undefined;
  protected isLoaded: boolean = false;
  protected isExam: boolean = false;
  protected exam: Exam | undefined;

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
    if (!this.classModule?.exam_id) {
      console.log('no exam id')
      this.isLoaded = true;
    } else {
      this.examService.getExams(this.classModule?.exam_id)
        .then(exam => {
          if (!exam) {
            console.log('no exam')
            window.location.reload(); // is this the best way to handle this?
            return
          }
          console.log('exam')
          this.exam = exam;
          this.isExam = true;
          this.isLoaded = true;
        })
        .catch(reason => {
          console.error(reason);
          this.isLoaded = true;
        })
    }
  }

  refreshComponent(id: number) {
    console.log('refreshing component')
    if (!this.classModule) {
      window.location.reload();
      return;
    }
    this.isLoaded = false;
    this.isExam = false;
    this.classModule.exam_id = id;
    this.ngOnInit();
  }
}
