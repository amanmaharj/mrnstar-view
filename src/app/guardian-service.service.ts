import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Guardian} from "./model/guardian.model";

@Injectable({
  providedIn: 'root'
})
export class GuardianServiceService {
  url = "http://localhost:8080/v1/morningstar/guardian";


  constructor(private http: HttpClient) { }

  saveGuardian(data: any): Observable<any>{
    return this.http.post(this.url, data )
  }

  showAll(): Observable<Guardian[]>{
    return this.http.get<Guardian[]>(this.url);
  }

  updateGuardian(g_id: any, data: any): Observable<any>{
    return this.http.put(`${this.url}/${g_id}/update-parent`, data)
  }

  getGuardian(g_id: any): Observable<any>{
    return this.http.get<any>(`${this.url}/unique-guardian/${g_id}`)
  }

  deleteGuardian(g_id: any): Observable<any>{
    return this.http.delete(`${this.url}/delete/${g_id}`)
  }


}
