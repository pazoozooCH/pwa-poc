import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, BehaviorSubject } from "rxjs";
import { map, startWith, tap, take, shareReplay } from "rxjs/operators";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user$: Observable<firebase.User> = this.fireAuth.user;

  loggedIn$: Observable<boolean> = this.user$.pipe(
    map(user => !!user),
    startWith(false),
    shareReplay(1)
  );

  notLoggedIn$: Observable<boolean> = this.loggedIn$.pipe(
    map(loggedIn => !loggedIn)
  );

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  async loginGooglePopup() {
    await this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async loginGoogleRedirect() {
    await this.fireAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  async logout() {
    await this.router.navigate(["/"]);
    await this.fireAuth.signOut();
  }
}
