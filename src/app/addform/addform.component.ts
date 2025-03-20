import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {verifieMontant} from '../validator/utils';

@Component({
  selector: 'app-addform',
  imports: [FormsModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent {
  formGroup:FormGroup;

  constructor(private  fb: FormBuilder){
    this.formGroup = this.fb.group({
      prenom : ['',[Validators.required]],
      age : ['',[Validators.required,Validators.min(6),Validators.max(60)]],
      montant : ['',[Validators.required,Validators.min(6),Validators.max(60),verifieMontant()]],

    })


  }




save(){
  console.log(this.formGroup.value.prenom)

  //console.log(this.age.value)
}


isvalidate(field:string){

  const formctrl = this.formGroup.get(field);
  return formctrl?.invalid && (formctrl?.touched || formctrl?.dirty);
}


}
