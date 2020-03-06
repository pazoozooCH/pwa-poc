import { Component, OnInit } from "@angular/core";
import { TechieDiariesService } from "./techie-diaries.service";

@Component({
  selector: "app-techie-diaries-list",
  templateUrl: "./techie-diaries-list.component.html",
  styleUrls: ["./techie-diaries-list.component.scss"],
  providers: [TechieDiariesService]
})
export class TechieDiariesListComponent {
  items$ = this.techieDiariesService.getList$();

  constructor(private techieDiariesService: TechieDiariesService) {}
}
