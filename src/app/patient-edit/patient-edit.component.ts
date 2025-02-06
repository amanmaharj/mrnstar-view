import {Component, Input, OnInit} from '@angular/core';
import {PatientServiceService} from "../patient-service.service";
import {Patient} from "../model/patient.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit{


  @Input() currentPatient: Patient = {
    firstName: "",
    lastName: "",
    memoryCare: false,
    guardians: []

  }
  constructor(private patientService: PatientServiceService, private route: Router, private rout: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.rout.snapshot.params["id"]
    this.showById(id);
    }

  showById(id: any): void{
    this.patientService.showByID(id).subscribe({
        next : (data) => {
          console.log(data);
          this.currentPatient = data;
        },
      error : (e) => console.log(e)
      }
    );
  }

  updatePatient(): void{

    this.patientService.updatePatient(this.currentPatient.id,this.currentPatient).subscribe(
      {
        next : (value) => {
          console.log(value);
          this.route.navigate(["/"]);
        }
      }
    )
  }




}
