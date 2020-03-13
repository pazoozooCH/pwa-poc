import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";
import { DemoFormComponent } from "./demo-form/demo-form.component";

const routes: Routes = [
  {
    path: "form",
    component: DemoFormComponent
  },
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
