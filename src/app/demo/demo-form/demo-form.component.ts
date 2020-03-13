import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

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

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  doSubmit() {
    this.snackBar.open("Submitting data (not really 😜)", "Close", {
      duration: DemoFormComponent.snachBarDurationInMs
    });
  }

  doSomething() {}
}
