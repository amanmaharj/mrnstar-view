import { Component } from '@angular/core';
import {Guardian} from "../model/guardian.model";
import {GuardianServiceService} from "../guardian-service.service";

@Component({
  selector: 'app-guardian-add',
  templateUrl: './guardian-add.component.html',
  styleUrls: ['./guardian-add.component.css']
})
export class GuardianAddComponent {

  guardian : Guardian = {
    firstName : "",
    lastName : "",
    guardians : [],
    address : "",
    phone : ""
  }
  submitted = false;

 constructor(private guardianService: GuardianServiceService) {
 }

  saveGuardian() :void {
   const data: Guardian = {
     firstName: this.guardian.firstName,
     lastName: this.guardian.lastName,
     address: this.guardian.address,
     phone: this.guardian.phone,
     guardians: this.guardian.guardians
   }

   this.guardianService.saveGuardian(data).subscribe({
       next: (data)=>{
         console.log(data);
         this.submitted=true;
       },
     error: (e)=>{
         console.log(e);
     }
     })
  }

  clearData(): void {
    this.submitted = false;
    this.guardian.firstName = ''
    this.guardian.lastName = ''
    this.guardian.phone = ''
    this.guardian.guardians = []
    this.guardian.phone = ''

  }
}
