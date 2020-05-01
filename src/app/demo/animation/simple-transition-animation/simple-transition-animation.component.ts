import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-button-animation",
  templateUrl: "./simple-transition-animation.component.html",
  styleUrls: ["./simple-transition-animation.component.scss"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "in-progress",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "orange",
          borderRadius: "100px"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("* => in-progress", [animate("2s")]),
      transition("* => *", [animate("0.5s")])
    ])
  ]
})
export class ButtonAnimationComponent {
  states = ["open", "in-progress", "closed"];
  currentState = this.states[0];

  toggle() {
    const currentIndex = this.states.indexOf(this.currentState);
    const newIndex =
      currentIndex + 1 === this.states.length ? 0 : currentIndex + 1;

    this.currentState = this.states[newIndex];
  }

  setState(newState: string) {
    this.currentState = newState;
  }
}
