import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-oauth2-callback',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './oauth2-callback.component.html',
  styleUrl: './oauth2-callback.component.css'
})
export class OAuth2CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      for (let paramsKey in params) {
        console.log(paramsKey, params[paramsKey])
      }
      this.http.post('https://academy-u202309-030-16e3810602c5.herokuapp.com/oauth/token', { code })
        .subscribe(
          (response: any) => {
            console.log('Token response:', response);
         //   this.authService.setAccessToken(response.access_token);

            const redirectUrl = localStorage.getItem('redirectUrl') || '/';
            localStorage.removeItem('redirectUrl');
            this.router.navigateByUrl(redirectUrl);
          },
          error => {
            console.error('Error exchanging code for token:', error);
            this.router.navigate(['/error']);
          }
        );
      if (code) {
        console.log('code', code);
        this.router.navigate(['/']);
      }
    });
  }
}
