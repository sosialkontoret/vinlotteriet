import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@services/authentication/authentication.service';

@Component({
  selector: 'sk-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  userId: string;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.auth.isLoggedIn().subscribe(result => {
      this.userId = result.uid;
    },                               error => {
      console.log(error);
    });
  }

}
