import {Component, OnInit, ViewChild} from '@angular/core';
import {Patient} from "../model/patient.model";
import {PatientServiceService} from "../patient-service.service";
import {GuardianListComponent} from "../guardian-list/guardian-list.component";
import {Router} from "@angular/router";

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
  constructor(private patientService: PatientServiceService, private router: Router) {
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

  deleteById(id: any): void {
    this.patientService.deleteById(id).subscribe({
      next: (data)=>{

        console.log(data);
        this.getAllPatients();


      },
      error: (e)=>{
        console.log(e);
        this.getAllPatients();
      }
    })
  }


  @ViewChild(GuardianListComponent) guar!: GuardianListComponent;

  callListComponent(){
    this.guar.getAllGuardians();
  }

}
