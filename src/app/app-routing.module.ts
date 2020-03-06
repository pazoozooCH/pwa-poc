import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechieDiariesListComponent } from './demo/techie-diaries-list/techie-diaries-list.component';
import { WelcomeComponent } from './navigation/welcome/welcome.component';


const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
