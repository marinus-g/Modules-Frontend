import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  title = 'Modules-Frontend';

  ngOnInit(): void {
    console.log("TESTYTEST")
    this.http.get('http://localhost:8080/hello', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

      }
    }).subscribe(
      response => {
        console.log('Hello response:', response);
      },
      error => {
        console.error('Error calling /hello:', error);
      }
    );
  }
}
