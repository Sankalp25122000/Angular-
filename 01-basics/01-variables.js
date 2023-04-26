var found = false;
var first_name = "Sankalp";
var scores = [10, 20, 30, 40, 50, 60];
console.log(found);
console.log(first_name);
scores.forEach(function (scores) {
    console.log(scores);
});
var sum = scores.reduce(function (acc, currentValue) {
    return acc + currentValue;
}, 0);
console.log(sum);
var players = ["Dhoni", "Rahane", "Kohli", "Sharma"];
players.forEach(function (players) {
    console.log(players);
});
