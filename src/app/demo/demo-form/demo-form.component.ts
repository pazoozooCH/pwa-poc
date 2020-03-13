import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoFormComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
