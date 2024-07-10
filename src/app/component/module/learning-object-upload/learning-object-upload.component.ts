import {Component, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'module-learning-object-upload',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './learning-object-upload.component.html',
  styleUrl: './learning-object-upload.component.css'
})
export class LearningObjectUploadComponent {
  excelFile: any;


  submitForm(event: SubmitEvent) {
    if (!this.excelFile) {
      event.preventDefault()
      return
    }
    console.log('File uploaded ' + this.excelFile);
  }
}
