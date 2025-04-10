import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PatientService} from '../../service/patient.service';

@Component({
  selector: 'app-liste-patient',
  standalone:true,
  imports: [
    RouterLink
  ],
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})
export class ListePatientComponent implements OnInit {

  patients:any[] = [];
  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patients = this.patientService.getAll();
  }

}
