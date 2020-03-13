import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
