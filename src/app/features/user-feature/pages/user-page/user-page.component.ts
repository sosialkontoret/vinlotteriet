import { Component } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { State } from '@models/enums/state.enum';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'sk-user',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {
  state: State = State.Before;
  userId$: Observable<string> = this.getUser();

  constructor(private auth: AuthenticationService) {}

  private getUser(): Observable<string> {
    return this.auth.isLoggedIn().pipe(
      filter(user => user?.uid !== undefined),
      map(user => user?.uid as string),
    );
  }
}
