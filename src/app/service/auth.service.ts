import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Authentication} from "../model/authentication";
import {firstValueFrom, Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) {
  }


  startAuthentication(redirect: string) {
    localStorage.setItem('authRedirect', redirect);
    console.log("startAuthentication")
    setTimeout(() => {
      window.location.href = environment.apiUrl + '/auth/microsoft';
    }, 1000)
    // window.location.href = 'http://localhost:8080/auth/microsoft';
  }


  logout() {
    localStorage.clear();
    window.location.href = 'login';
  }

  handleAuthentication() {
    const redirectUrl = localStorage.getItem('authRedirect');
    localStorage.removeItem('authRedirect');
    console.log('redirectUrl', redirectUrl)
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }

  }

  async isAuthenticated(): Promise<boolean> {
    return await this.getAuthentication().then(value => value.authenticated)
  }

  getAuthentication(): Promise<Authentication> {
    const response$ = this.http.get<Authentication>(environment.apiUrl + '/auth/authenticated', {
        withCredentials: true
      },
    )
    return firstValueFrom(response$)
  }

  async isLecturer() {
    return await this.getAuthentication()
      .then(value => value.roles.includes('Dozentenkollegium'))
  }
}
