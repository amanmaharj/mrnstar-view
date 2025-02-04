import { Component } from '@angular/core';
import {Patient} from "../model/patient.model";
import {PatientServiceService} from "../patient-service.service";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  patient: Patient = {
    firstName: "",
    lastName:"",
    memoryCare:false,
    guardians:[]
  }
  submitted = false;

  constructor(private patientService: PatientServiceService) {
  }

  savePatient(): void {
    const data = {
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      memoryCare: this.patient.memoryCare,
      guardians : this.patient.guardians
    }

    this.patientService.storeData(data)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.submitted = true;
        },
        error: (e) => console.log(e)
      })
  }

/*  showAll(): void {
    this.patientService.getAll().subscribe({
    next: (data) => {
      console.log(data);

    },
      error: (e) => {console.log(e);}
    })
  }*/

  clearInputData(){
    this.submitted = false;
    this.patient = {
      firstName: "",
      lastName: "",
      memoryCare: false,
      guardians: []
    }
  }
}
