import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { RegisterForm } from '@models/forms/register.form';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-register',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  state: State;

  constructor(private router: Router, private auth: AuthenticationService) {}

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
}
