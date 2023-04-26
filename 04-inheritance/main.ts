import { Shape } from "./shape";
import { Circle } from "./circle";

let shape = new Shape(10,20);
console.log(shape.getInfo());

let circle = new Circle(20,10,100);
console.log(circle.getInfo());
