import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import User = firebase.User;
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: Observable<User>;

  constructor(private fb: AngularFireAuth) {
    this.user = fb.authState;
  }

  getUser(): Observable<User> {
    return this.fb.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.getUser().pipe(map(user => user?.uid !== undefined ?? false));
  }

  login(email: string, password: string): Observable<UserCredential> {
    return fromPromise(this.fb.signInWithEmailAndPassword(email, password));
  }

  register(email: string, password: string): Observable<UserCredential> {
    return fromPromise(this.fb.createUserWithEmailAndPassword(email, password));
  }

  logout(): Observable<void> {
    return fromPromise(this.fb.signOut());
  }

  resetPassword(email: string): Observable<void> {
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
