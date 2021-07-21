import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { RegisterForm } from '@models/forms/register.form';
import { State } from '@models/enums/state.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sk-register',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnDestroy {
  state: State = State.Before;
  loggedInSubscription: Subscription;

  constructor(private router: Router, private auth: AuthenticationService) {
    this.loggedInSubscription = this.auth.isAuthenticated().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['my-lotteries']);
      }
    });
  }

  onRegister(registerForm: RegisterForm) {
    this.auth.register(registerForm.email, registerForm.password).subscribe(
      () => {
        this.router.navigate(['my-lotteries']);
      },
      () => {
        this.state = State.IsError;
      },
    );
  }

  ngOnDestroy(): void {
    if (this.loggedInSubscription && !this.loggedInSubscription.closed) {
      this.loggedInSubscription.unsubscribe();
    }
  }
}
