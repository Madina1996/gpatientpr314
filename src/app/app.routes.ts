import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FichePatientComponent} from './fiche-patient/fiche-patient.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AddformComponent} from './addform/addform.component';
import {ListePatientComponent} from './patient/liste-patient/liste-patient.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: 'home',
    component: HomeComponent
  },
  {
    path:'patients',
    component:ListePatientComponent
  },
  {
    path:'addform',
    component:AddformComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];
