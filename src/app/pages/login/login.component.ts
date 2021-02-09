import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '@services/validation/validation.service';
import {LoginModel} from '@models/login.model';
import {AuthenticationService} from '@services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private validationService: ValidationService, private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.setupForm();
    this.isLoading = true;
    this.auth.isLoggedIn().subscribe(result => {
      this.isLoading = false;
      if (result) {
        this.router.navigate(['profile']);
      }
    });
  }

  private setupForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      password: ['', Validators.required],
    });
  }

  login(loginForm: LoginModel) {
    this.errorMessage = null;
    this.auth.login(loginForm.email, loginForm.password).subscribe(result => {
      this.router.navigate(['profile']);
    },                                                             error => {
      if (error.message) {
        this.errorMessage = error.message;
      }
    });
  }

  registerUser() {
    this.errorMessage = null;
    this.router.navigate(['register']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
