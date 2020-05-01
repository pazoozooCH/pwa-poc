import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";

@Component({
  selector: "app-animation",
  templateUrl: "./animation.component.html",
  styleUrls: ["./animation.component.scss"],
  animations: [slideInAnimation]
})
export class AnimationComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
