import { Shape } from "./shape";
import { Circle } from "./circle";

let circle1 = new Circle(10,20,700);


let circle = new Circle(20,10,100);
let shape:Shape[]=[];

shape.push(circle);
shape.push(circle1);

shape.forEach(shape=>{
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    
    console.log("-------------");
    
    
})
