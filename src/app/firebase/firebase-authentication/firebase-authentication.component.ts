import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-firebase-authentication",
  templateUrl: "./firebase-authentication.component.html",
  styleUrls: ["./firebase-authentication.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirebaseAuthenticationComponent {
  displayedColumns = ["name", "value"];

  userInfo$ = this.fireAuth.user.pipe(
    map(user => {
      if (user) {
        console.log("#user", user);
        return [
          { name: "uid", value: user.uid },
          { name: "displayName", value: user.displayName },
          { name: "photoURL", value: user.photoURL },
          { name: "email", value: user.email },
          { name: "emailVerified", value: user.emailVerified },
          { name: "phoneNumber", value: user.phoneNumber },
          { name: "isAnonymous", value: user.isAnonymous },
          { name: "providerId", value: user.providerId },
          { name: "tenantId", value: user.tenantId },
          { name: "providerData", value: JSON.stringify(user.providerData) },
          { name: "refreshToken", value: user.refreshToken }
        ];
      } else {
        return null;
      }
    })
  );
  constructor(private fireAuth: AngularFireAuth) {}
}
