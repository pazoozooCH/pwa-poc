import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";

const routes: Routes = [
  {
    path: "list",
    component: TechieDiariesListComponent
  },
  {
    path: "draganddrop",
    component: DragAndDropComponent
  },
  {
    path: "**",
    redirectTo: "list"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
