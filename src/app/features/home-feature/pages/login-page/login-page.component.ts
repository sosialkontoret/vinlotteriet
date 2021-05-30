import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LoginForm } from '@models/forms/login.form';
import { Observable } from 'rxjs';
import { State } from '@models/enums/state.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sk-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  state: State;
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {
    this.initIsLoggedIn();
  }

  initIsLoggedIn(): void {
    this.state = State.IsLoading;
    this.isAuthenticated$ = this.auth.isAuthenticated().pipe(
      tap(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['my-lotteries']);
          return;
        }
        this.state = State.NoData;
      }),
    );
  }

  onLogin(loginForm: LoginForm) {
    this.auth.login(loginForm.email, loginForm.password).subscribe(
      () => {
        this.router.navigate(['my-lotteries']);
      },
      error => {
        console.error('Failed to login', error);
      },
    );
  }
}
