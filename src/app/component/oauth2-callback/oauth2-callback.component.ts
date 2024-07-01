import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-oauth2-callback',
  standalone: true,
  imports: [],
  templateUrl: './oauth2-callback.component.html',
  styleUrl: './oauth2-callback.component.css'
})
export class OAuth2CallbackComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        console.log('code', code);
        this.router.navigate(['/']);
      }
    });
  }
}
