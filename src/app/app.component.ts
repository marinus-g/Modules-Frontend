import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {authenticationGuard} from "./guard/authentication.guard";
import {DevService} from "./service/dev.service";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private devService: DevService, private authService: AuthService) {
  }

  title = 'Modules-Frontend';

  ngOnInit(): void {
    this.authService.isAuthenticated()
      .then((isAuthenticated) => {
        this.showButton = isAuthenticated;
      });
  }
  showButton: boolean = false;

  toggleLecturer() {
    this.devService.toggleLecturer()
      .finally(() => {
        window.location.reload()
      });
  }
}
