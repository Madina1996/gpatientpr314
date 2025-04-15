import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
const url ='http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  http = inject(HttpClient)

  patients:any[] = [];

  constructor() { }

  getAll(){
    return this.patients;
  }

  add(p:any){
    this.patients.push(p);
  }

  getPatients(){
    return this.http.get(url+"patients", );
  }

}
