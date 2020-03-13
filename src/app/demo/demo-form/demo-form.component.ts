import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { DemoBottomSheetComponent } from "./demo-bottom-sheet/demo-bottom-sheet.component";
import { MatDialog } from "@angular/material/dialog";
import { DemoDialogComponent } from "./demo-dialog/demo-dialog.component";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoFormComponent {
  private static snachBarDurationInMs = 3000;

  demoForm = this.fb.group({
    company: [{ value: "InfTec", disabled: true }],
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street1: [""],
      street2: [""],
      city: ["", Validators.pattern(/Bern/)],
      state: [""],
      zip: ["94043", Validators.maxLength(5)]
    })
  });

  constructor(
    private fb: FormBuilder,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  doSubmit() {
    this.snackBar.open("Submitting data (not really 😜)", "Close", {
      duration: DemoFormComponent.snachBarDurationInMs
    });
  }

  doSomething() {
    this.bottomSheet.open(DemoBottomSheetComponent);
  }

  save() {
    const dialogRef = this.dialog.open(DemoDialogComponent);
  }
}
