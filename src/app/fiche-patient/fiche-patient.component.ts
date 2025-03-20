import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-patient',
  imports: [],
  standalone: true,
  templateUrl: './fiche-patient.component.html',
  styleUrl: './fiche-patient.component.css'
})
export class FichePatientComponent {

  @Input()
  docteur = "Dr diop";
  prenonp = "modou ndiaye";
  telephone = "77 222 00 33";
  adresse = "Centre ville";
  @Input()
  age:number = 23;


}
