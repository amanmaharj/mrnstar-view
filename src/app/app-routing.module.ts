import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";

const routes: Routes = [
  {path:"", redirectTo:"patient", pathMatch: "full"},
  {path:"patient", component: PatientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
