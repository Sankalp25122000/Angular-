import { Shape } from "./shape";
import { Circle } from "./circle";

let circle1 = new Circle(10);


let circle = new Circle(20);
let shape:Shape[]=[];

shape.push(circle);
shape.push(circle1);

shape.forEach(shape=>{

    console.log(shape.calculateArea());
    
    console.log("-------------");
    
    
})
