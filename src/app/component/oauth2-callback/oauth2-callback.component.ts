import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-oauth2-callback',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService, Router],
  templateUrl: './oauth2-callback.component.html',
  styleUrl: './oauth2-callback.component.css'
})
export class OAuth2CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.handleAuthentication();
  }
}
