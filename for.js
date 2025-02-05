var i, sum= 0

for (i=0; i<10; i++){
    sum += i 
}
console.log("Sum : "+sum); // 45

// for of loop

var names = ['John', 'Jane', 'Jim', 'Jack']

for (let name of names){
    console.log(name);
}

// for in loop

var person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
}

console.log("For in Loop");
for(let key in person){
    console.log(key+ ": " + person[key]);
}