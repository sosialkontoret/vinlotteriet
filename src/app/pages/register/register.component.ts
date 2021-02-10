import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '@services/validation/validation.service';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { LoginModel } from '@models/login.model';

@Component({
  selector: 'sk-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private auth: AuthenticationService,
  ) {}

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      password: ['', Validators.required],
    });
  }

  register(registerForm: LoginModel) {
    this.errorMessage = null;
    this.auth.register(registerForm.email, registerForm.password).subscribe(
      () => {
        this.router.navigate(['profile']);
      },
      error => {
        if (error.message) {
          this.errorMessage = error.message;
        }
      },
    );
  }

  cancel() {
    this.errorMessage = null;
    this.router.navigate(['login']);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
