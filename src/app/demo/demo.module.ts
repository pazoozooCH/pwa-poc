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
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { DemoBottomSheetComponent } from "./demo-form/demo-bottom-sheet/demo-bottom-sheet.component";
import { DemoDialogComponent } from "./demo-form/demo-dialog/demo-dialog.component";
import { DemoCameraComponent } from "./demo-camera/demo-camera.component";
import { AnimationComponent } from "./animation/animation.component";
import { ButtonAnimationComponent } from "./animation/simple-transition-animation/simple-transition-animation.component";
import { EnterLeaveAnimationComponent } from "./animation/enter-leave-animation/enter-leave-animation.component";
import { RoutingTargetComponent } from "./animation/routing-target/routing-target.component";

@NgModule({
  declarations: [
    TechieDiariesListComponent,
    DragAndDropComponent,
    DemoFormComponent,
    DemoBottomSheetComponent,
    DemoDialogComponent,
    DemoCameraComponent,
    AnimationComponent,
    ButtonAnimationComponent,
    EnterLeaveAnimationComponent,
    RoutingTargetComponent
  ],
  imports: [
    DemoRoutingModule,
    CommonModule,
    DragDropModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class DemoModule {}
