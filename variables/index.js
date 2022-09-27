var hello = 'Hello World';
var hello = 'Hello World2';
hello = "Hello World3";

console.log(hello);
//console.log(number);
var number = 2;

sayGreeting();

function sayGreeting() { // Function example let and var
    let greetings = 'Greetings traveler'; // let get the variable in the scope, you cant redefine it
    // like let greetings = 'Hello World2'; this will give an error
    if (number > 1) { // Check global variable (var)
        let greetings = 'Greetings travelers'; // this is another scope
        console.log(greetings);
    }
    console.log(greetings);
}

sayHello();

function sayHello() { // Function example var scope global
    //var hello here interpeter
    console.log(hello);
    var hello = "Hello World4"; // remove var here and see what happens
    console.log(hello);
}

console.log(hello);

sayNumber();

function sayNumber(){
    const numberToSay = 2;
    console.log(numberToSay);
    //numberToSay = 3;
}