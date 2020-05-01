import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfoComponent } from "./info/info.component";
import { InfoRoutingModule } from "./info-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [InfoComponent],
  imports: [InfoRoutingModule, CommonModule, MatCardModule, MatTableModule]
})
export class InfoModule {}
