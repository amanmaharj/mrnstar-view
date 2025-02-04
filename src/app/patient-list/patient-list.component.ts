import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient.model";
import {PatientServiceService} from "../patient-service.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{

  patient?: Patient[];

  currentPatient: Patient = {
    firstName: "",
    lastName: "",
    memoryCare: false,
    guardians: []
  }
  ngOnInit(): void {
    this.getAllPatients()
  }
  constructor(private patientService: PatientServiceService) {
  }
  getAllPatients(): void {
    this.patientService.getAll().subscribe({
      next: (data)=>{
        this.patient = data
        console.log(data)
      },
      error: (e) => console.log(e)
    })

  }

  getPatientById(): void{
    this.patientService.getById().subscribe({
      next: (data) => {
        this.currentPatient = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    })
  }
}
