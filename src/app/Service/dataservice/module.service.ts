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
    return this.http.get(`https://academy-u202309-030-16e3810602c5.herokuapp.com//modules`);
  }

  searchModules(name: string): Observable<any>{
    return this.http.get(`https://academy-u202309-030-16e3810602c5.herokuapp.com//modules/search/${name}`);
  }
}
