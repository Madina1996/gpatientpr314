import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-liste',
  imports: [MatButtonModule, RouterLink],
  standalone:true,
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
 users:any[] = [];


}
