import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirebaseAuthenticationComponent } from "./firebase-authentication/firebase-authentication.component";
import { FirebaseRoutingModule } from "./firebase-routing.module";
import { AngularFireModule } from "@angular/fire";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [FirebaseAuthenticationComponent],
  imports: [
    CommonModule,
    AngularFireModule,
    FirebaseRoutingModule,
    MatCardModule,
    MatTableModule
  ]
})
export class FirebaseModule {}
