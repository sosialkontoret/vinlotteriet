import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { State } from '@models/enums/state.enum';
import { RegisterForm } from '@models/forms/register.form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sk-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss'],
})
export class RegisterTemplateComponent implements OnChanges {
  @Input() state: State;
  @Output() register = new EventEmitter<RegisterForm>();

  attemptedSubmit = false;
  hasError = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnChanges(): void {
    this.attemptedSubmit = false;
    this.hasError = this.state === State.IsError;
  }

  onSubmit(): void {
    this.attemptedSubmit = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.register.emit(this.registerForm.value);
  }
}
