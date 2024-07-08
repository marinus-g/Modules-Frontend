import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/modules`);
  }

  searchModules(name: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/modules/search/${name}`);
  }
}
