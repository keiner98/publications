import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationComponent } from './UI/pages/publication/publication.component';

const routes: Routes = [
  {
    path:'publication',
    component:PublicationComponent
  },
  {
    path:'',
    redirectTo:'publication',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
