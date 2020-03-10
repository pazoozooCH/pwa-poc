import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DemoRoutingModule } from "./demo-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [TechieDiariesListComponent, DragAndDropComponent],
  imports: [
    DemoRoutingModule,
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class DemoModule {}
