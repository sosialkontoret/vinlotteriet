import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import firebase from 'firebase';
import { map } from 'rxjs/operators';
import User = firebase.User;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: Observable<User>;

  constructor(private fb: AngularFireAuth) {
    this.user = fb.authState;
  }

  getUser(): Observable<firebase.User> {
    return this.fb.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.getUser().pipe(map(user => user?.uid !== undefined ?? false));
  }

  login(email: string, password: string): Observable<any> {
    return fromPromise(this.fb.signInWithEmailAndPassword(email, password));
  }

  register(email: string, password: string): Observable<any> {
    return fromPromise(this.fb.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    fromPromise(this.fb.signOut()).subscribe();
  }

  resetPassword(email: string): Observable<any> {
    return fromPromise(this.fb.sendPasswordResetEmail(email));
  }

  isLoggedIn(): Observable<firebase.User> {
    return this.user;
  }

  isAuthenticatedDeprecated(): Promise<boolean> {
    return new Promise(resolve => {
      this.fb.authState.subscribe(result => {
        if (result && result.uid) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}
