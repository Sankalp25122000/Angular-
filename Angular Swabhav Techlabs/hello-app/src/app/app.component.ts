import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // phone ="../assets/phone.jpg";
 item:string[]=[];
 newTask:string='';
 pipeTitle:string ='Angular pipes demo';
 pipeArray:number[] =[1,2,3,4,5,6,7,8,9,10];
 today :number = Date.now();
 user ={name:'Sankalp', age:20, city :'Mumbai'};

 addToList(){
  if(this.newTask==''){
  }
  else{
    this.item.push(this.newTask);
    this.newTask='';
  }
 }

 public deleteTask(index:number) {
  this.item.splice(index, 1);
}

  fontColor:string="green";
  bgColor:string="blue";

  toggleColor(){
    if(this.fontColor=="blue"){
      this.fontColor="green";
      this.bgColor="blue";
    }
    else{
      this.fontColor="blue";
      this.bgColor="green";
    }
  }

  items =["first","second","third"]
  color:string="red";
  show:boolean=false; // if the value is true then it will show content in div
  topBatsmanDetails=[
     {name:"Virat",matches:200,runs:20000,country:"India"},
     {name:"Rohit",matches:100,runs:15000,country:"India"},
     {name:"Surya",matches:90,runs:7000,country:"India"},
     {name:"Pant",matches:120,runs:12000,country:"India"}
     ];

     scoreDetails=[
      {name:"Virat",matches:200,lastFiveInnings:[20,30,40,50,30]},
      {name:"Rohit",matches:100,lastFiveInnings:[20,30,40,50,10]},
      {name:"Surya",matches:90,lastFiveInnings:[20,30,40,50,20]},
      {name:"Pant",matches:120,lastFiveInnings:[20,30,40,50,15]}
    ];

    calculateTotalScore(scores:number[]):number{
      let score = scores.reduce((acc,val)=>{
        return acc+val;
      },0)
      return score;
    }
  // sum=""
  // a=""
  // b=""
  // calculateSum(){
  //   this.sum=String((parseInt(this.a)||0)+(parseInt(this.b)||0))
  // }
  

  // getSum(box1:string,box2:string){
  //   let a = parseInt(box1) || 0;
  //   let b = parseInt(box2) || 0;
  //   this.sumDisplay= a + b;
  // }
  // paraDisplay:string="";

  // getValue(text:string){
  //   this.paraDisplay=text;
  // }


  // name="";
  // clearName(){
  //   this.name="";
  // }

  // test="";
  // clearText(){
  //   this.test="";
  // }
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
