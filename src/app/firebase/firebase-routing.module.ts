import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FirebaseAuthenticationComponent } from "./firebase-authentication/firebase-authentication.component";

const routes: Routes = [
  {
    path: "authentication",
    component: FirebaseAuthenticationComponent
  },
  {
    path: "**",
    redirectTo: "authentication"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule {}
