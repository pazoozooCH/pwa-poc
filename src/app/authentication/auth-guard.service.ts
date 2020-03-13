import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate() {
    return this.authenticationService.loggedIn$;
  }
}
