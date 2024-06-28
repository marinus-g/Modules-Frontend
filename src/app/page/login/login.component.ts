import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected handleMicrosoftAuth() {
    window.location.href = 'https://academy-u202309-030-16e3810602c5.herokuapp.com/auth/microsoft';
  }
}
