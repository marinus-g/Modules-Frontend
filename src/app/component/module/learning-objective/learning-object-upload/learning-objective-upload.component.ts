import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ExamService} from "../../../../service/exam.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'module-learning-objective-upload',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './learning-objective-upload.component.html',
  styleUrl: './learning-objective-upload.component.css'
})
export class LearningObjectiveUploadComponent {

  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  @Input()
  classModuleId: number | undefined;
  excelFile: any;
  private excelUrl: string | undefined;

  @Output(
    'submittedObjective'
  )
  submitted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private examService: ExamService) {
  }


  submitForm(event: SubmitEvent) {
    if (!this.fileInput || !this.classModuleId) {
      return;
    }
    const elementAsHtmlInputElement = this.fileInput.nativeElement as HTMLInputElement;

    if (!elementAsHtmlInputElement.files || !elementAsHtmlInputElement.files.length) {
      event.preventDefault()
      return;
    }
    const file = elementAsHtmlInputElement.files.item(0);
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const target = e.target as FileReader;
      this.excelUrl = target.result as string;
      if (!this.classModuleId) {
        return;
      }
      this.examService.uploadExcel(this.classModuleId, this.excelUrl)
        .then((header) => {
          if (header) {
            console.log('uploaded exam')
            const headerNumber = header.replace('/exam/', '');
            if (headerNumber && headerNumber.match(/^\d+$/)) {
              this.submitted.emit(+headerNumber);
            }
          } else {
            window.location.reload();
          }
        }).catch(reason => {
          console.error(reason)
          alert("Failed to upload exam")
        }
      )
    }
    reader.readAsDataURL(file);
  }
}
