import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DemoRoutingModule } from "./demo-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    TechieDiariesListComponent,
    DragAndDropComponent,
    DemoFormComponent
  ],
  imports: [
    DemoRoutingModule,
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class DemoModule {}
