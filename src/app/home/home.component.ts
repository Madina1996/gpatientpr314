import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  personnes= ["serigne","sovie","seydina","sambou"]
  value = 0;
  val="";
  color=""
  mycolor="";
  colors:any =[];

  moin(){
    if (this.value > 0){
      this.value --;
      this.reset();
    }

  }
  plus(){

    if (this.value < 100){
      this.value ++;
      this.reset();
    }
  }



  reset(){
    this.val = "width:"+this.value+ "%"
  }

  changeColor(){
    this.loadColor(this.color);
    this.colors.push(this.color)
  }

  loadColor(col:any){
    this.mycolor = col;
  }
}
