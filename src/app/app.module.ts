import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { GuardianAddComponent } from './guardian-add/guardian-add.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { GuardianListComponent } from './guardian-list/guardian-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import {GuardianEditComponent} from "./guardian-edit/guardian-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientAddComponent,
    GuardianAddComponent,
    GuardianListComponent,
    PatientEditComponent,
    GuardianEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
