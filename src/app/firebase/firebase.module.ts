import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirebaseAuthenticationComponent } from "./firebase-authentication/firebase-authentication.component";
import { FirebaseRoutingModule } from "./firebase-routing.module";
import { AngularFireModule } from "@angular/fire";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { FirebaseFirestoreComponent } from "./firebase-firestore/firebase-firestore.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [FirebaseAuthenticationComponent, FirebaseFirestoreComponent],
  imports: [
    CommonModule,
    AngularFireModule,
    FirebaseRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class FirebaseModule {}
