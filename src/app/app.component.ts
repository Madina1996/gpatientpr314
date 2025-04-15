import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {AuthService} from './service/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  authService = inject(AuthService);
  router = inject(Router)


  logout(){
    this.authService.deconnecter()
    this.router.navigateByUrl("/login")
  }



}
