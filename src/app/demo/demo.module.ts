import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DemoRoutingModule } from "./demo-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";

@NgModule({
  declarations: [TechieDiariesListComponent, DragAndDropComponent],
  imports: [
    DemoRoutingModule,
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class DemoModule {}
