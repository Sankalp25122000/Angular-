"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var circle1 = new circle_1.Circle(10, 20, 700);
var circle = new circle_1.Circle(20, 10, 100);
var shape = [];
shape.push(circle);
shape.push(circle1);
shape.forEach(function (shape) {
    console.log(shape.getInfo());
    console.log("-------------");
});
