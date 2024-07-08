import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../../Service/auth/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [HttpClient, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  protected handleMicrosoftAuth() {
    this.authService.startAuthentication('/')
  }
}
