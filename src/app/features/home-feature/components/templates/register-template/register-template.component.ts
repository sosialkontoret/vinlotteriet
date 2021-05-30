import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from '@models/enums/state.enum';
import { RegisterForm } from '@models/forms/register.form';

@Component({
  selector: 'sk-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss'],
})
export class RegisterTemplateComponent implements OnInit {
  @Input() state: State;
  @Output() register = new EventEmitter<RegisterForm>();

  private registerForm: RegisterForm = {};

  ngOnInit() {}

  onEmailChanged(email: string): void {
    this.registerForm.email = email;
  }

  onPasswordChanged(password: string): void {
    this.registerForm.password = password;
  }

  onRegister() {
    this.register.emit(this.registerForm);
  }
}
