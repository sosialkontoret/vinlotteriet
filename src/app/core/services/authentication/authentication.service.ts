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
  private readonly user$: Observable<User | null>;

  constructor(private fb: AngularFireAuth) {
    this.user$ = fb.authState;
  }

  getUser(): Observable<User | null> {
    return this.fb.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.getUser().pipe(map(user => user?.uid !== undefined ?? false));
  }

  login(email: string = '', password: string = ''): Observable<UserCredential> {
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

  isLoggedIn(): Observable<User | null> {
    return this.user$;
  }
}
