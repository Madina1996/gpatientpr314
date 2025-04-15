import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FichePatientComponent} from './fiche-patient/fiche-patient.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AddformComponent} from './addform/addform.component';
import {ListePatientComponent} from './patient/liste-patient/liste-patient.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {authGuard} from './guard/auth.guard';
import {AddComponent} from './user/add/add.component';
import {ListeComponent} from './user/liste/liste.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[authGuard]

  },

  { path: 'home',
    component: HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'patients',
    component:ListePatientComponent,
    canActivate:[authGuard]
  },
  {
    path:'addform',
    component:AddformComponent,
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginPageComponent
  },

  {
    path:'user/add',
    component:AddComponent,
    canActivate:[authGuard]
  },
  {
    path:'user/liste',
    component:ListeComponent,
    canActivate:[authGuard]
  },
  {
    path:'**',
    component:NotFoundComponent,
    canActivate:[authGuard]
  }
];
