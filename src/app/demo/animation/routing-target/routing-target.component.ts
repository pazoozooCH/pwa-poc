import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-routing-target",
  templateUrl: "./routing-target.component.html",
  styleUrls: ["./routing-target.component.scss"]
})
export class RoutingTargetComponent implements OnInit {
  title = this.activatedRoute.snapshot.data.title;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
