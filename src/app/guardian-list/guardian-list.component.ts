import {Component, OnInit} from '@angular/core';
import {GuardianServiceService} from "../guardian-service.service";
import {Guardian} from "../model/guardian.model";

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.css']
})
export class GuardianListComponent implements OnInit{
guardians ?: Guardian[];

ngOnInit(): void {
  console.log("ngOnInit is called");
  this.getAllGuardians();
}


  constructor(private guardianService: GuardianServiceService) {}

  getAllGuardians(): void{
    this.guardianService.showAll().subscribe({
      next : (value) => {
        this.guardians = value;
        console.log(value);
      },
      error: (e)=>{
        console.log(e);
      }
    })
  }
}
