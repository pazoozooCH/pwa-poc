import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";

@Component({
  selector: "app-account-button",
  templateUrl: "./account-button.component.html",
  styleUrls: ["./account-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountButtonComponent {
  user$: Observable<firebase.User> = this.fireAuth.user;

  constructor(private fireAuth: AngularFireAuth) {}

  loginGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }
}
