import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientAddComponent} from "./patient-add/patient-add.component";
import {GuardianAddComponent} from "./guardian-add/guardian-add.component";
import {GuardianListComponent} from "./guardian-list/guardian-list.component";
import {PatientEditComponent} from "./patient-edit/patient-edit.component";
import {GuardianEditComponent} from "./guardian-edit/guardian-edit.component";

const routes: Routes = [
  {path:"", redirectTo:"patient", pathMatch: "full"},
  {path:"patient", component: PatientListComponent},
  {path:"add-patient", component: PatientAddComponent},
  {path:"add-guardian", component: GuardianAddComponent},
  {path:"guardian", component: GuardianListComponent},
  {path:"update-patient/:id/update-guardian", component: PatientEditComponent},
  {path:"update-guardian/:g_id", component: GuardianEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
