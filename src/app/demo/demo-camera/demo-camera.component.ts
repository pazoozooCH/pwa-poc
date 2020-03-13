import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-demo-camera",
  templateUrl: "./demo-camera.component.html",
  styleUrls: ["./demo-camera.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCameraComponent {
  imgUrl$ = new BehaviorSubject<string | ArrayBuffer>(null);
  imagePath;

  constructor(private snackBar: MatSnackBar) {}

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.error("MimeType unsupported: " + mimeType);
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgUrl$.next(reader.result);
    };
  }

  upload() {
    this.snackBar.open(
      `cnt: ${this.imagePath.length}, [0].name: ${this.imagePath[0].name}, [0].type: ${this.imagePath[0].type}`,
      "X",
      {
        duration: 2000
      }
    );
  }
}
