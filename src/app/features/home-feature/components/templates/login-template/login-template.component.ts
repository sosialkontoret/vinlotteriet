import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { LoginForm } from '@models/forms/login.form';
import { State } from '@models/enums/state.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sk-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
})
export class LoginTemplateComponent implements OnChanges {
  @Input() state: State;
  @Output() login = new EventEmitter<LoginForm>();

  attemptedSubmit = false;
  stateError = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnChanges(): void {
    this.attemptedSubmit = false;
    this.stateError = this.state === State.IsError;
  }

  onSubmit(): void {
    this.attemptedSubmit = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.login.emit(this.loginForm.value);
  }
}
