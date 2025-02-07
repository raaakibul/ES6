// simple function

function myname(){
    var firstname = "John";
    var lastname = "Doe";
    var fullname = firstname + " " + lastname;
    console.log(fullname);
}
myname(); // John Doe

// function with parameters
function add(a, b) {
    console.log(a+b);
}
add(1, 2) // 3

// function with default parameters
function add(a, b = 10) {
    return a + b;
}
console.log(add(1)); // 11

// function with rest parameters
function add(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4, 5)); // 15

// function with spread operator
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}
var numbers = [1, 2, 3, 4, 5];
console.log(add(...numbers)); // 15

// function with arrow function
var add = (a, b) => a + b;
console.log(add(1, 2)); // 3


function one(){
    return 1;
}
function two(){
    return 2;
}
console.log(one() + two()); // 3

// anonymous function

var add = function(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3