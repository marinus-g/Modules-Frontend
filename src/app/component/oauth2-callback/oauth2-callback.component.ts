import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-oauth2-callback',
  standalone: true,
  imports: [],
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
      this.http.get<String>('https://academy-u202309-030-16e3810602c5.herokuapp.com/hello')
        .subscribe(data => {
          console.log(data);
        });
      if (code) {
        console.log('code', code);
        this.router.navigate(['/']);
      }
    });
  }
}
