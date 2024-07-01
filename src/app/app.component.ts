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
    this.http.get('https://academy-u202309-030-16e3810602c5.herokuapp.com/hello', {
      withCredentials: true,
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
