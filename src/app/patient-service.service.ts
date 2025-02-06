import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./model/patient.model";
const baseUrl = "http://localhost:8080/v1/morningstar"
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Patient[]>
  {
    return this.http.get<Patient[]>(baseUrl);
  }

  storeData(data: any): Observable<any>
  {
    return this.http.post(baseUrl, data);
  }


  deleteById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  showByID(id: any): Observable<Patient> {
    return this.http.get<Patient>(`${baseUrl}/patient/${id}`);
  }

  updatePatient(id: any, data: any): Observable<any>{
    return this.http.put<any>(`${baseUrl}/update-patient/${id}/update-guardian`, data);
  }
}
