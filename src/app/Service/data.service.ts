import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = '/class-data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
