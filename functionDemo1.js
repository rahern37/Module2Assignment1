//Student Name: Renay Hernandez
//Student ID: 1225941316
//Date: 09/2/2023
var age = 10; //int
var salary = 15.00; //double

//console.log(`The variable type of age is ${typeof age}`);
//console.log(`The variable type of salary is ${typeof salary}`);

//var name = `John Smith`;
//console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = function(name, year){
    console.log(`Happy New year ${year} ${name}`);
}

//console.log(`The variable type of displayGreetings is ${typeof displayGreetings}`);

const displayGreetingsWithEmoji = function(name, year){
    console.log(`😀 😀 Happy new year ${year} ${name} 😀 😀`);
}

const greet = function(name, year, func){
    func(name, year);

}

greet('Sam', 2022, displayGreetingsWithEmoji);
greet('Jane',2022,displayGreetings);


//var greet = {};

//if(age > 10){
//    greet = displayGreetings;
//}else{
//    greet = displayGreetingsWithEmoji;
//}

//greet('Same', 2022);