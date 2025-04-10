import {Component, input, Input, OnInit} from '@angular/core';
import {PatientService} from '../service/patient.service';

@Component({
  selector: 'app-fiche-patient',
  imports: [],
  standalone: true,
  templateUrl: './fiche-patient.component.html',
  styleUrl: './fiche-patient.component.css'
})
export class FichePatientComponent implements OnInit {


  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {

  }


  @Input()
  docteur = "Dr diop";
  prenonp = "modou ndiaye";
  telephone = "77 222 00 33";
  adresse = "Centre ville";
  @Input()
  age:number = 23;


}
