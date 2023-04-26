import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // phone ="../assets/phone.jpg";

  name="";
  clearName(){
    this.name="";
  }

  test="";
  clearText(){
    this.test="";
  }
  // counter:number = 0;

  // resetCounter(){
  //   this.counter= 0;
  // }
  // incrementCounter(){
  //   if(this.counter!=10){
  //   this.counter++;
  //   }
  // }

  // decrementCounter(){
  //   if(this.counter!=0){
  //   this.counter--;
  //   }
  // }

}
