import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
  selector: 'sk-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  userId: string;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.auth.isLoggedIn().subscribe(
      result => {
        this.userId = result.uid;
      },
      error => {
        console.log(error);
      },
    );
  }
}
