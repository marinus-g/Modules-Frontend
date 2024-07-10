import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SchoolClass} from "../model/class";
import {environment} from "../../environments/environment";
import {firstValueFrom} from "rxjs";
import {ClassModuleDto, ModuleDto} from "../model/module";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) {
  }


  private _schoolClass: SchoolClass | null = null;


  async fetchClass(set: boolean): Promise<SchoolClass> {
    const response$ = this.http.get<SchoolClass>(environment.apiUrl + '/class/me', {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)

    if (response.status === 200) {
      const schoolClass = response.body as SchoolClass;
      if (set) {
        this._schoolClass = schoolClass
      }
      return schoolClass
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  async fetchClassById(id: number, set: boolean): Promise<SchoolClass> {
    const response$ = this.http.get<SchoolClass>(environment.apiUrl + '/class/' + id, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)

    if (response.status === 200) {
      const schoolClass = response.body as SchoolClass;
      if (set) {
        this._schoolClass = schoolClass
      }
      return schoolClass;
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  async fetchClasses(): Promise<SchoolClass[]> {
    const response$ = this.http.get<SchoolClass[]>(environment.apiUrl + '/class', {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body as SchoolClass[];
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  get schoolClass(): SchoolClass | null {
    return this._schoolClass;
  }

  set schoolClass(schoolClass: SchoolClass) {
    this._schoolClass = schoolClass;
  }

  async addModuleToClass(selectedModule: ModuleDto, schoolClass: SchoolClass | null) {
    const response$ = this.http.post(environment.apiUrl + '/class/' + schoolClass?.id + '/module/' + selectedModule.id, null, {
      observe: 'response',
      withCredentials: true,
    })

    const response = await firstValueFrom(response$)
    if (response.status === 201) {
      console.log(response)
      return response.headers.get("Location")
    } else {
      throw new Error(response.body as unknown as string);
    }
  }
}
