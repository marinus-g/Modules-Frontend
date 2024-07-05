import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Authentication} from "../model/authentication";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) {
  }


  startAuthentication(redirect: string) {
    localStorage.setItem('authRedirect', redirect);
    console.log("startAuthentication")
    window.location.href = 'https://academy-u202309-030-16e3810602c5.herokuapp.com/auth/microsoft';
    // window.location.href = 'http://localhost:8080/auth/microsoft';
  }


  logout() {
    this.cookieService.delete('code')
    window.location.href = '/login';
  }

  handleAuthentication(code: string) {
    if (code) {
      const redirectUrl = localStorage.getItem('authRedirect');
      localStorage.removeItem('authRedirect');
      console.log('redirectUrl', redirectUrl)
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      }
    }
  }

  async isAuthenticated(): Promise<boolean> {
     return await this.getAuthentication().then(value => value.authenticated)
  }

  getAuthentication(): Promise<Authentication> {
    const response$ =  this.http.get<Authentication>('https://academy-u202309-030-16e3810602c5.herokuapp.com/auth/authenticated', {
      withCredentials: true},
    )
    return firstValueFrom(response$)
  }
}
