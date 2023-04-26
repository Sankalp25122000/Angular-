let found :boolean=false;
let first_name:string="Sankalp";
let scores :number[]=[10,20,30,40,50,60]
console.log(found);
console.log(first_name);

scores.forEach(scores=>{
    console.log(scores);
    
})

let sum :number=scores.reduce((acc,currentValue)=>{
    return acc+currentValue;
},0)

console.log(sum);

let players :string[]=["Dhoni","Rahane","Kohli","Sharma"]

players.forEach(players=>{
    console.log(players
        );
    
})

