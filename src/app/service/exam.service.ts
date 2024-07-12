import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";
import {Exam} from "../model/exam";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  async getExams( examId: number) {
    const response$ = this.http.get<Exam>(environment.apiUrl + '/exam/' + examId, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to get exams')
    }
  }

  private async uploadExam(moduleId: number, exam: File) {
    const formData = new FormData()
    formData.append('file', exam)
    const response$ = this.http.post(environment.apiUrl + '/exam/module/' + moduleId,
      formData, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 201) {
      return response.headers.has("Location") ? response.headers.get('Location') : null
    } else {
      throw new Error('Failed to exam')
    }
  }

  async uploadExcel(moduleId: number, excelUrl: string) {
    if (!excelUrl) {
      return;
    }
    console.log(excelUrl)
    const base64$ = excelUrl.split(',')[1];
    const blob$ = this.base64ToBlob(base64$, 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    const file = new File([blob$], 'excel.xlsx', { type: 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return this.uploadExam(moduleId, file)
  }

  private base64ToBlob(base64: string, contentType: string) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

}
