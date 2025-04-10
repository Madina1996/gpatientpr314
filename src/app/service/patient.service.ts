import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:any[] = [];

  constructor() { }

  getAll(){
    return this.patients;
  }

  add(p:any){
    this.patients.push(p);
  }


}
