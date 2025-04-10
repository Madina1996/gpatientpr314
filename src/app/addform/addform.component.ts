import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {verifieMontant} from '../validator/utils';
import {PatientService} from '../service/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addform',
  imports: [FormsModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent {
  formGroup:FormGroup;

  constructor(private  fb: FormBuilder,
              private patientService: PatientService,
              private router:Router) {
    this.formGroup = this.fb.group({
      prenom : ['',[Validators.required]],
      dateNaissance : ['',[Validators.required]],
      sexe : ['',[Validators.required]],
      adresse : ['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]],
      telephone : ['',[Validators.required]],

    })


  }




save(){
  this.patientService.add(this.formGroup.value);
  this.router.navigateByUrl("/patients")
}


isvalidate(field:string){

  const formctrl = this.formGroup.get(field);
  return formctrl?.invalid && (formctrl?.touched || formctrl?.dirty);
}


}
