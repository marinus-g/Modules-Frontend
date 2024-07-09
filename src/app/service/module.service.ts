import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {ClassModuleDto, ModuleDto} from "../model/module";
import {ClassService} from "./class.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient, private classService: ClassService) {
  }

  async getClassModules(): Promise<ClassModuleDto[]> {
    if (!this.classService.schoolClass) {
      throw new Error("No class selected")
    }
    const response$ = this.http.get<ClassModuleDto[]>(environment.apiUrl + '/class/' + this.classService.schoolClass.id + "/modules", {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body as ClassModuleDto[];
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

 async createModule(module: ModuleDto) {
    const response$ = this.http.post(environment.apiUrl + '/module', module, {
      observe: 'response',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const response = await firstValueFrom(response$)
    if (response.status === 201) {
      console.log(response)
      return response.headers.get("Location")
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  async fetchModuleAtLocation(location: string): Promise<ModuleDto> {
    const response$ = this.http.get<ModuleDto>(environment.apiUrl + location, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body as ModuleDto;
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  async fetchAllModules(): Promise<ModuleDto[]> {
    const response$ = this.http.get<ModuleDto[]>(environment.apiUrl + '/module', {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body as ModuleDto[];
    } else {
      throw new Error(response.body as unknown as string);
    }
  }

  async fetchClassModuleFromLocation(location: string) {
    const response$ = this.http.get<ClassModuleDto>(environment.apiUrl + location, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      return response.body as ClassModuleDto;
    } else {
      throw new Error(response.body as unknown as string);
    }
  }
}
