import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
