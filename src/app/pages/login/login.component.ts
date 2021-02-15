import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LoginForm } from '@models/forms/login.form';
import { Observable } from 'rxjs';
import { State } from '@models/enums/state.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
          return this.router.navigate(['profile']);
        }
        this.state = State.NoData;
      }),
    );
  }

  onLogin(loginForm: LoginForm) {
    this.auth.login(loginForm.email, loginForm.password).subscribe(
      () => {
        this.router.navigate(['profile']);
      },
      error => {
        console.error('Failed to login', error);
      },
    );
  }
}
