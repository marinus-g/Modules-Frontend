import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) {
  }


  startAuthentication(redirect: string) {
    localStorage.setItem('authRedirect', redirect);
    window.location.href = 'https://academy-u202309-030-16e3810602c5.herokuapp.com/auth/microsoft';
    // window.location.href = 'http://localhost:8080/auth/microsoft';
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
      const redirectUrl = localStorage.getItem('authRedirect');
      localStorage.removeItem('authRedirect');
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      }
    }
  }

}