import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
  selector: "app-demo-bottom-sheet",
  templateUrl: "./demo-bottom-sheet.component.html",
  styleUrls: ["./demo-bottom-sheet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoBottomSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<DemoBottomSheetComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}
