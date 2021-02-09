$(document).ready(()=>{
        
// for call
function sayname1(name){
    console.log(name)
    console.log(this)
}
sayname1.call("keshav");
console.log("1st ends here")


function sayname2(name,name2,age){
    console.log(name)
    console.log(age)
    console.log(this)
}
sayname2.call("shubham","keshav",25,27);
console.log("2nd ends here")



function sayname3(name,age){
    console.log(name)
    console.log(age);
    console.log(this)
}
sayname3.call("shubham","keshav",27);
console.log("3rd ends here")


        
function sayname4(name){
    console.log(name)
    console.log(this)
}
sayname4("keshav");
console.log("4t ends here")


//apply

console.log("apply")
function sayname1(name){
    console.log(name)
    console.log(this)
}
let args = ["bhupat",21]
sayname1.apply("keshav",args);
console.log("1st ends here")


function sayname2(name,name2,age){
    console.log(name)
    console.log(age)
    console.log(this)
}
let args2 = ["bhupat",21,25,28]
sayname2.apply("shubham",args2);
console.log("2nd ends here")



function sayname3(name,age){
    console.log(name)
    console.log(age);
    console.log(this)
}
let args3 = ["bhupat",21]
sayname2.apply("shubham",args3);
console.log("3rd ends here")


        
function sayname4(name){
    console.log(name)
    console.log(this)
}
sayname4.apply("keshav");
console.log("4t ends here")

// blind
function sayname(name,age){
    console.log("hii entered in bing")
    console.log(name)
    console.log(age);
    console.log(this)
}
let greet = sayname.bind('shubham')
greet("keshav",21)
console.log("1nd ends")
function sayname(name,age){
    console.log("hii entered in bing")
    console.log(name)
    console.log(age);
    console.log(this)
}
let greet1 = sayname.bind('shubham')
greet1("keshav",21)
console.log("2rd ends")
});

function sayMyName(name){
    alert(`hii i know you,you are ${name},right?`);
}
sayMyName("KeshavAgrawal");

let name = 'John';

// Without template literals, tedious/error-prone:
console.log('Hello ' + name + '!');

// Wrong: The sum of 2 and 4 is 24.
console.log('The sum of 2 and 4 is ' + 2 + 4 + '.');

// Correct: The sum of 2 and 4 is 6.
console.log('The sum of 2 and 4 is ' + (2 + 4) + '.');

// With template literals:
console.log(`Hello ${name}!`);
console.log(`The sum of 2 and 4 is ${2 + 4}.`);

//multiline thing
let message = `Hello World! This is
a message that takes up
many different lines.`;
console.log(message)