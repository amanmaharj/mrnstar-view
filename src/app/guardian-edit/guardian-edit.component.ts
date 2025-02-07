import {Component, OnInit} from '@angular/core';
import {GuardianServiceService} from "../guardian-service.service";
import {Guardian} from "../model/guardian.model";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-guardian-edit',
  templateUrl: './guardian-edit.component.html',
  styleUrls: ['./guardian-edit.component.css']
})
export class GuardianEditComponent implements OnInit{
  presentGuardian: Guardian = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    patients: []
  }
  ngOnInit(): void {
    const data = this.route.snapshot.params["g_id"];
    this.getByID(data);
  }

  constructor(private guardianService: GuardianServiceService,private router: Router, private route: ActivatedRoute) {
  }

  getByID(g_id: any): void{
    this.guardianService.getGuardian(g_id).subscribe({
      next : (data)=>{
        this.presentGuardian = data;

        console.log(data);

      },error : (er)=>{
        console.log(er)
      }
    })
  }

  updateGuardian(): void{
    this.guardianService.updateGuardian(this.presentGuardian.g_id, this.presentGuardian).subscribe({
      next : (data)=>{
        console.log(data);
        this.router.navigate(["/guardian"])

      },error: (e)=>{
        console.log(e);
      }
    })
  }



}
