import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-addform',
  imports: [FormsModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent {

formGroup = new FormGroup({
  prenom : new FormControl('',[Validators.required]),
  age : new FormControl('',[Validators.required,Validators.min(6)]),
})

save(){
  console.log(this.formGroup.value.prenom)

  //console.log(this.age.value)
}


isvalidate(field:string){

  const formctrl = this.formGroup.get(field);
  return formctrl?.invalid && (formctrl?.touched || formctrl?.dirty);
}


}
