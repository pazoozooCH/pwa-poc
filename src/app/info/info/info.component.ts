import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  displayedColumns: string[] = ["key", "value"];
  infos = [{ key: "Version", value: environment.version }];

  constructor() {}

  ngOnInit(): void {}
}
