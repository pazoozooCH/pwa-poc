import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-routing-target",
  templateUrl: "./routing-target.component.html",
  styleUrls: ["./routing-target.component.scss"]
})
export class RoutingTargetComponent {
  title = this.activatedRoute.snapshot.data.title;
  titleText = Array.from(new Array(20))
    .map(() => this.title)
    .join(" ");

  constructor(private activatedRoute: ActivatedRoute) {}
}
