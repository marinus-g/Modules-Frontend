import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient,  private router: Router) {
  }


  startAuthentication(redirect: string) {
    localStorage.setItem('authRedirect', redirect);
    window.location.href = 'https://academy-u202309-030-16e3810602c5.herokuapp.com/auth/microsoft';
  }

  isAuthenticated() {
    return localStorage.getItem('authToken') !== null;
  }

  logout() {
    this.cookieService.delete('code')
    window.location.href = '/login';
  }

  handleAuthentication(code: string) {
    if (code) {
      console.log('Code:', code);
      this.http.post('https://academy-u202309-030-16e3810602c5.herokuapp.com/oauth/token', { code }, {
        observe: 'response',
        withCredentials: true,
      })
        .subscribe(
          (response: any) => {
            console.log('Token response:', response.body);
            const redirectUrl = localStorage.getItem('redirectUrl') || '/';
            localStorage.removeItem('authRedirect');
            this.router.navigateByUrl(redirectUrl);
          },
          error => {
            console.error('Error exchanging code for token:', error);
            this.router.navigate(['/error']);
          }
        );
    }
  }

}
