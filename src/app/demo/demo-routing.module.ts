import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TechieDiariesListComponent } from './techie-diaries-list/techie-diaries-list.component';

const routes: Routes = [
  {
    path: '',
    component: TechieDiariesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {
}
