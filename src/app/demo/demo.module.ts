import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechieDiariesListComponent } from "./techie-diaries-list/techie-diaries-list.component";
import { DemoRoutingModule } from "./demo-routing.module";

@NgModule({
  declarations: [TechieDiariesListComponent],
  imports: [DemoRoutingModule, CommonModule]
})
export class DemoModule {}
