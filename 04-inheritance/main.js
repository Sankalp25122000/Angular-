"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var shape = new shape_1.Shape(10, 20);
console.log(shape.getInfo());
var circle = new circle_1.Circle(20, 10, 100);
console.log(circle.getInfo());
