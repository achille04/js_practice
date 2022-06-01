 let text1 = "I dont want to "
text1 += "leave Football"

document.getElementById("demo").innerHTML = text1;

let text = 25 + 15 + " I dont want to" + 50 + 20;

document.getElementById("demos").innerHTML = text;

function myFunction(p, q) {

    return p * q

}

document.getElementById("demosF").innerHTML = myFunction(5, 7);

let y = myFunction1(7, 3)

function myFunction1(a, b) {

    return a * b;

}

document.getElementById('demosF1').innerHTML = y;

function sleep(name, time) {

    console.log("Hey, " + name + " It was me at " + time);

}
sleep("Jashim", "10 PM");
sleep("Karim", "6 PM");
sleep("Rahim", "11 PM");
console.log("Hello everything well?");

let carName = "BMW"

function myFunction2() {

    let carName = "Volvo"
    console.log(carName);

}

myFunction2()

console.log(carName);



let remainder = 29 % 9;

console.log(remainder);

let age = "He is " + (2021 - 1990) + " Years Old"
console.log(age);

const car = {

    type: "Fiat",
    model: "500",
    color: "white",
    weight: "850kg",
    start: function () {

        this.drive()

        console.log('car has started');
        return "car has started"

    },

    drive: function () {

        console.log('car is driving');

    },

    brake: function () {

        console.log('Brake the car');

    }

}

document.getElementById('cars').innerHTML = car['color'];
document.getElementById('cars').innerHTML = car.start();

function sayHi() {

    // console.log(name);
    // console.log(age);
    var name = 'Js'
    let age = 21;

}

sayHi();

function displayDate() {

    document.getElementById("time").innerHTML = Date();

}

let text5 = 'nobody knows'
console.log(text5.charAt(5));
console.log(text5[5]);

let text6 = "Whatever You/I Want/Have"
console.log(text6.split("/"));

let country = 'Italy'
let nation = 'Nation'
let sentence = `I love ${country} and it is a great ${nation}`
console.log(sentence);

let str123 = 'b' + 'a' + +'a' + 'a';
console.log(str123.toLocaleUpperCase());

let exp = 4.5465612323
console.log(exp.toExponential(2));

console.log(parseInt('20 10 30'));

const cars = ['Pegada', 'Mclearn', 'BMW', 'Lamborghini']

let carLength = cars.length;
// cars[4] = "Mitsubishi"
for (i = 0; i < carLength; i++) {

    // document.getElementById('arrays').innerHTML = cars[i];
    console.log(cars[i]);

}

console.log('Finished');

// Comment

const books = ['GodFather', 'Hobbit', 'Harry Potter', 'The Lord of the Rings', 'Heradotus', 'Narnia']

let theLength = books.length;

let booksText = "<ul>"
for (i = 0; i < theLength; i++) {

    booksText += "<li>" + books[i] + "</li>"

    console.log(books[i]);

}

booksText += "</ul>"

document.getElementById("bookText").innerHTML = booksText;

console.log("Finished");

// Comment

const tables = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];

let tableText = "<ol>"

tables.forEach(myFunctionx)

tableText += "</ol>"
document.getElementById("table").innerHTML = tableText;

function myFunctionx(values) {

    tableText += "<li>" + values + "</li>"

}

tables.forEach(myFunctionx)

console.log("Finished");

let ill = []
ill[6] = "Hello WOrld"
console.log(ill);

const number = [4, 20, 50, 47, 90, 100, 1, 5, 9]
document.getElementById("sort").innerHTML = number;


function myFunctionSA() {

    number.sort()
    document.getElementById("sort").innerHTML = number;

}

function myFunctionSN() {

    number.sort(function (a, b) {
        return a - b
    });
    document.getElementById("sort").innerHTML = number;

}

function myFunctionR() {

    number.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    document.getElementById("sort").innerHTML = number;

}

const maxNumber = [500, 23, 68, 998, 100, 258, 54];
console.log(Math.max(500, 23, 68, 998, 100, 258, 54));
console.log(Math.min(500, 23, 68, 998, 100, 258, 54));
 

 const numbers = [55, 10, 1, 23, 6, 9, 584, 5289, 5478, 52, 147, 369, 258, 47, 56, 23, 48, 93]


function myFunction3(value, index, array){

    document.getElementById('seeing').innerHTML = numbers;

    console.log(value);
    console.log(index);
    console.log(array);
    console.log('-------------------');

}

numbers.forEach(myFunction3); 

function myFunction4(total, value, index, array){

    console.log(total);

    console.log(value);

    console.log("------------------");

    return total + value;

}

const newNumbers =  numbers.reduce(myFunction4)

document.getElementById('seeing1').innerHTML = newNumbers;

const date = new Date();
document.getElementById("date").innerHTML = date;

let math = Math.floor(Math.random() * 10)
document.getElementById("math").innerHTML = math;
console.log(math);

function ludo(min, max){

    
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

ludo()

const student = ["Amber", "Depp", "Camille", "Jack Sparrow", "Biden"];

document.getElementById("Alphabetical").innerHTML = student.sort();

const rollNumber = [5,1,3,6,9,8,7,4,11,10,12,13,15,14,19,18,17,16];

rollNumber.sort(function(a, b){return a - b});
document.getElementById("pNumber").innerHTML = rollNumber;


function myFunctionVote(){

    let voteable;

    let age = Number(document.getElementById('age').value);

    if(isNaN(age)){

        voteable = "Input is not a number to vote";

    }
    else{

        voteable = age < 18 ? "Can't Vote cause too young" : "Eligible to vote";

    }

    document.getElementById("demoVote").innerHTML = voteable;

}


let age1 = "19";

age1 = Number(age1);

if(isNaN(age1)){

    console.log("Input is a Number");

}

else{

    console.log(age1 < 18 ? "Not Eligible to vote" : "Eligible to vote");

}

console.log("5" == 5);
console.log("5" === 5);

const time = new Date().getHours();
let greetings;
if(time < 10){

    greetings = "Good Day"

} 

else if (time < 20){

    greetings = "Good Day"

}

else {

    greetings = "Good Evening"

}

document.getElementById("time_get").innerHTML = greetings;

let day;

switch (new Date().getDay()){

    case 0:
    day = "Sunday"
    break;
    
    case 1:
    day = "Monday"
    break;

    case 2:
    day = "Tuesday"
    break;

    case 3:
    day = "Wednesday"
    break;

    case 4:
    day = "Thursday"
    break;

    case 5:
    day = "Friday"
    break;

    case 6:
    day = "Saturday"
    break;

}

document.getElementById("switch").innerHTML = 'It is' + day;

 
let age3 = 18;

if (age3 < 18){

    console.log("You are stupid");

}

else if (age3 === 18){

    console.log("You are okay");

}

else {
    console.log("Welcome to the real world!!!");
}

