import { Shape } from "./shape";

export class Circle extends Shape{
    constructor(x:number, y:number,private radius:number){
        super(x,y);
    }

    public getInfo(): string {
        return super.getInfo()+` radius:${this.radius}`;
    }

    public calculateArea():number{
        return Math.PI * Math.pow(this.radius,2);
    }

}