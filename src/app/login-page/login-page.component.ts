import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  standalone:true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  formGroup = inject(FormBuilder);
  authService = inject(AuthService)
  router = inject(Router)

  loginForm = this.formGroup.group(
    {
      login: ['',Validators.required],
      possword: ['',Validators.required]
    }
  )

  connexion() {
    console.warn(this.loginForm.value)
    if (this.authService.connection(this.loginForm.value.login,
      this.loginForm.value.possword) == true){
      console.log("true")
      this.router.navigateByUrl("/home")
    }else {
      console.log("false")
    }


  }
}
