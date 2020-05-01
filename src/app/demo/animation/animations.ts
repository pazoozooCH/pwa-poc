import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* => FlyIn", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* => Scale", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ transform: "scale(0)" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("300ms ease-out", style({ transform: "scale(0)" }))
      ]),
      query(":enter", [
        animate("300ms ease-out", style({ transform: "scale(1)" }))
      ])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* => Fade", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ opacity: "0" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ opacity: "0" }))]),
      query(":enter", [animate("300ms ease-out", style({ opacity: "1" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
