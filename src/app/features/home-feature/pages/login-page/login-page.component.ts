import { Component } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LoginForm } from '@models/forms/login.form';
import { Observable } from 'rxjs';
import { State } from '@models/enums/state.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sk-login',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  state: State = State.Before;
  isAuthenticated$: Observable<boolean> = this.initIsLoggedIn();

  constructor(private router: Router, private auth: AuthenticationService) {}

  initIsLoggedIn(): Observable<boolean> {
    this.state = State.IsLoading;
    return this.auth.isAuthenticated().pipe(
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
