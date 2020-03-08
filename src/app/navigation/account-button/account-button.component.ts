import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

@Component({
  selector: "app-account-button",
  templateUrl: "./account-button.component.html",
  styleUrls: ["./account-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountButtonComponent {
  user$: Observable<firebase.User> = this.fireAuth.user;
  loggedIn$: Observable<boolean> = this.user$.pipe(
    map(user => !!user),
    startWith(false),
    tap(val => console.log("#loggedIn", val))
  );

  constructor(private fireAuth: AngularFireAuth) {}

  loginGooglePopup() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginGoogleRedirect() {
    this.fireAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }
}
