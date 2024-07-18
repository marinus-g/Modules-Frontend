import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";
import Project from "../model/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  async createProject(project: {
    class_id: string
    module_id: number,
    name: string,
    description: string,
  }) {
    const response$ = this.http.post(environment.apiUrl + '/project', project, {
      withCredentials: true,
      observe: 'response'
    })

    try {
      const response = await firstValueFrom(response$)
      if (response.status !== 201) {
        return false;
      }
      return response.headers.get('Location')
    } catch (error) {
      return false;
    }
  }

  async getProject(projectId: number) {
    const response$ = this.http.get<Project>(environment.apiUrl + '/project/' + projectId, {
      withCredentials: true,
      observe: 'response'
    })

    try {
      const response = await firstValueFrom(response$)
      if (response.status !== 200) {
        return false;
      }
      return response.body
    } catch (error) {
      return false
    }
  }
}
