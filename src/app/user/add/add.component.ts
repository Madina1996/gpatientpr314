import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add',
  standalone:true,
  imports: [MatInputModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

}
