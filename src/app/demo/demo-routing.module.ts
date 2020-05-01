import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { DemoCameraComponent } from "./demo-camera/demo-camera.component";
import { AnimationComponent } from "./animation/animation.component";
import { RoutingTargetComponent } from "./animation/routing-target/routing-target.component";

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
    path: "camera",
    component: DemoCameraComponent
  },
  {
    path: "animation",
    component: AnimationComponent,
    children: [
      {
        path: "flyin",
        component: RoutingTargetComponent,
        data: {
          title: "Fly-In Animation"
        }
      },
      {
        path: "scale",
        component: RoutingTargetComponent,
        data: {
          title: "Scaling Animation"
        }
      },
      {
        path: "fade",
        component: RoutingTargetComponent,
        data: {
          title: "Fade Animation"
        }
      }
    ]
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
