import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";
import { AuthenticationService } from "src/app/authentication/authentication.service";

@Component({
  selector: "app-account-button",
  templateUrl: "./account-button.component.html",
  styleUrls: ["./account-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountButtonComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
