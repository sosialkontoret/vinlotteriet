
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '@services/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(
      resolve => {
        this.auth.isAuthenticated().then(
          result => {
            if (result) {
              resolve(true);
            } else {
              resolve(false);
              this.router.navigate(['login']);
            }
          });
      },
    );
  }

}
