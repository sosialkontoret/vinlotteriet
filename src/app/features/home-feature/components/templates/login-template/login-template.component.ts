import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginForm } from '@models/forms/login.form';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
})
export class LoginTemplateComponent implements OnInit {
  @Input() state: State;
  @Output() login = new EventEmitter<LoginForm>();

  private loginForm: LoginForm = {};

  ngOnInit() {}

  onEmailChanged(email: string): void {
    this.loginForm.email = email;
  }

  onPasswordChanged(password: string): void {
    this.loginForm.password = password;
  }

  onLogin(): void {
    this.login.emit(this.loginForm);
  }
}
