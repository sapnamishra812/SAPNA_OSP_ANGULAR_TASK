import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasangerFormComponent } from './pasanger-form/pasanger-form.component';
import { ShowPageComponent } from './show-page/show-page.component';

const routes: Routes = [
  {path:'list', component:PasangerFormComponent},
  {path:'show/:id', component:ShowPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
