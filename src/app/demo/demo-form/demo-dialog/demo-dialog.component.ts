import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-demo-dialog",
  templateUrl: "./demo-dialog.component.html",
  styleUrls: ["./demo-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoDialogComponent {
  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
