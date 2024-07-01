import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
  }


  startAuthentication() {
    localStorage.setItem('authRedirect', window.location.pathname);
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
      this.cookieService.set('code', code, {
        secure: true,
      });
      const redirect = localStorage.getItem('authRedirect');
      localStorage.removeItem('authRedirect');
      window.location.href = redirect ? redirect : '/';
    }
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }
}
