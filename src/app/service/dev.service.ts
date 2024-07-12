import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http: HttpClient) { }

  async toggleLecturer() {
    const response$ = this.http.post(environment.apiUrl + '/dev/toggle', {}, {
      withCredentials: true,
      observe: 'response'
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return true;
    } else {
      throw new Error(response.body as unknown as string);
    }
  }
}
