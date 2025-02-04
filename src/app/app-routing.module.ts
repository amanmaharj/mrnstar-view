import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientAddComponent} from "./patient-add/patient-add.component";
import {GuardianAddComponent} from "./guardian-add/guardian-add.component";

const routes: Routes = [
  {path:"", redirectTo:"patient", pathMatch: "full"},
  {path:"patient", component: PatientListComponent},
  {path:"add-patient", component: PatientAddComponent},
  {path:"add-guardian", component: GuardianAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
