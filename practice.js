let text1 = "I don't want to "
text1 += "leave Football"

document.getElementById("demo").innerHTML = text1;

let text = 25 + 15 + " I don't want to" + 50 + 20;

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

document.getElementById("switch").innerHTML = 'It is ' + day;

 
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


const cars4 = ['BMW', 'Marcedez', 'Saab', "Wolkwagon", "Bugatti", "Viper", "Mclearn"];

let text4 = "";
for (let i = 0; i < cars4.length; i++) {
  text4 += cars4[i] + "<br>";
}

document.getElementById("car3").innerHTML = text4;

const num = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'j']

for(i = 1; i < num.length; i++){

    console.log(i);

}

const rCars = ["Porsche", "Ferrari", "Ford", "Pagani", "Bugatti", "Chevorlet", "McClearn", "BMW"]

text5 = "";
for(let xCar of rCars){

    text5 = text5 + xCar + '<br>';
    console.log(xCar);

}

document.getElementById("forOf").innerHTML = text5; 

 

let text7 = "";
let j = 0;
while (j < 10) {
  text7 += "<br> The number is " + j;
  j++;
}

document.getElementById("while1").innerHTML = text7;

/* let k = 0;
let text9 = "";

while(true){
    text9 += "The number is " + k;
    i++;
    console.log(text9);
}

document.getElementById("while2").innerHTML = text9; */

const animals = new Map ([

    ["cat", 500], 
    ["dog", 1500],
    ["ape", 2500]

]);

document.getElementById("map1").innerHTML = animals.get("cat");

const animals1 = new Map;

animals1.set("tortoise", 200)
animals1.set("hedgehog", 1200)
animals1.set("snake", 2200)

animals1.set("tortoise", 1400)

document.getElementById("map2").innerHTML = animals1.get("tortoise");

const animals3 = new Map ([

    ["giraffe", 5000],
    ["zebra", 5100],
    ["hippo", 5300]

]);

let text8 = "";
for (const x of animals3.entries()){
    text8 += x + "<br>"
}


document.getElementById("map3").innerHTML = text8;

document.getElementById("constructor").innerHTML = "text8".constructor + "<br>" + (3.96).constructor;

/*-------------------------------------------- Error -------------------------------------------------------*/

try{
    // Regular Code
} catch(err){

    console.log(err);

}

function myFunctionThrow() {
    const message = document.getElementById("catch");
    message.innerHTML = "";
    let x = document.getElementById("throw").value;
    try { 
      if(x == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("throw").value = "";
    }
  }


  function startFan(){

    console.log('asfdfadsdsfsfd');

  }

  startFan()

  let str = "Hello"
  if(0>5){
    str = "Peter"
  }

  console.log(str);
  
/*-------------------------------------------- Hoisting -------------------------------------------------------*/
y1 = 12;

x1 = 5;

console.log(x1 * y1);

var x1;

var y1;

/* console.log(typeof name1)
let name1 = "Blah" */

console.log(str1);
var str1 = "Hello Peter"

const person = {
    firstName: "Doc",
    lastName: "Ock",
    id: 505,
    fullName : function(){
       return this.firstName + " " + this.lastName;
    },

  /*   getFullName: function(){

        return this.fullName(); 
    }*/


};

console.log(person.fullName());

document.getElementById("this_related").innerHTML = person.fullName();

const person1 = {
    fullName1: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"Andrew",
    lastName: "Garfield",
  }

console.log(person1.fullName1.call(person2));
  
/*-------------------------------------------- Arrow_Function -------------------------------------------------------*/

let myArrowFunction = (a,b) => a * b;
console.log(myArrowFunction(5,6));

let hello;

hello = (value) => "Hello World" + " " + value;

console.log(hello("What's Up"));

let hello1;

hello1 = value => "Hello World" + " " + value;

console.log(hello1("What's Up, How is it Going"));

let hello2;

hello2 = (value, newValue) => "Hello World" + " " + value + " " + newValue;

console.log(hello2("What's Up, How is it Going?", "Having Fun?"));

let hello3 = () => "Shortest Version of a Function"

console.log(hello3());

let brr = [];
brr [40] = "Hello Peter"
console.log(brr[4]);

const crr = () => {
    return this;
}

console.log(crr());

// Create a Class method named "age", that returns the Car age

class Car {
    constructor (name1, year1){
        this.name1 = name1;
        this.year1 = year1;

    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year1
    }
}

let myCar = new Car("Ford", 2014);
document.getElementById("car_age").innerHTML = "My Car is " + myCar.age() + " years Old"

class Person{
    constructor(name2, age2) {
        this.name2 = name2;
        this.age2 = age2;
    }
    
    play(status){

        console.log(`${this.name2} is playing ${status}`);

        const statusOfPlay = `${this.name2} is playing ${status} at ${this.age2}`;
        const playStatus = document.getElementById("cr7playing")
        playStatus.innerHTML = statusOfPlay;

    }

}

const person3 = new Person ("Cristiano Roanldo", 30); // Instance
const person4 = new Person ("Harry Maguire", 27);

person3.play("Okay");
person4.play("Bullshit, Even De Gea doesn't pass him the ball! -_- ");

let text9 = 
'{"employees" : [' + 
'{"firstName":"John", "lastName": "Doe"},' +
'{"firstName":"Anna", "lastName": "Frank"},' +
'{"firstName":"Adolf", "lastName": "Hitler"} ]}';

const obj = JSON.parse(text9)
console.log(obj);

console.log(obj.employees[2].firstName);

let person5 = {
    firstName: "Cristiano",
    lastName: "Ronaldo"
}

console.log(JSON.stringify(person5));

let a = "string";
let b = "sstring"

console.log(a - b);

function myFunction5(a) {

    let b = 10;
    b = b + a;

}

console.log(myFunction5()); // Undefined

function myFunction6(a) {

    let 
    power = 10;
    return
    a * power;

}

console.log(myFunction6(10));

let text10 = "";

for(i = 1; i < 10; i += 2){
    text10 += "The Odd Numbers are " + i + "<br/>"
  }

  document.getElementById('let_Odd_Numbering').innerHTML = text10;

  let text11 = "";

  for(i = 9; i > 0; i -= 2){
    text11 = text11 + "Negative odds are " + i + "<br/>" 
  }
  document.getElementById('let_Neg_Odd_Numbering').innerHTML = text11;

/*-------------------------------------------- ES6 -------------------------------------------------------*/

const x2 = (x,y) => x * y;
document.getElementById("es6_arrow_function").innerHTML = x2(5,6) + " Using Arrow Function";

let words = "Ilaria Ragone"
let text12 = "";

for(let word of words){
    text12 = text12 + word + "<br/>"
}

// document.getElementById("loop_over_array").innerHTML = text12;
 
/* let gameCompanies = {
    name1: "Ubisoft",
    games: ["Assassin's Creed", "Far Cry", "Tom Clancy's Rainbow Six Extraction", "Watch Dogs", "Prince of Persia: The Sands of Time"],
    printGameList: function(){
        let self = this;
        this.games.forEach( function (a) {
            console.log(`${self.name1} created ${a}`);
            document.getElementById("foreach_fact").innerHTML = `${self.name1} created ${a}`;
            });
    },

};

gameCompanies.printGameList() */
 
let gameCompanies1 = {
    name2: "Ubisoft",
    games1: ["Assassin's Creed", "Far Cry", "Tom Clancy's Rainbow Six Extraction", "Watch Dogs", "Prince of Persia: The Sands of Time"],
    printGameList1: function(){
        this.games1.forEach((a) =>document.getElementById("foreach_fact").innerHTML = `${this.name2} created ${a}`)
         /* console.log(`${this.name2} created ${a}`)) */ 
    },

};

gameCompanies1.printGameList1()

let age4 = 18;

let type;
if(age4 >= 18){
    type = "Adult"
} else{
    type = "Child"
}

let age5 = 18;

let type1 = (age5 >= 18) ? "I am an Adult" : "I am not an Adult";

let age6 = 9;

let type2 = age6 >= 18 ? "I am an Adult" : age6 < 10 ? "I am a Child" : "I am a Young Man";

console.log(type2);

let numbers1 = [ 25, 18, 19, 98, 14, 39, 17, 18, 29]
// let numbers1 = [ 1, 2, 3, 4, 5, 6, 10]

let result = numbers1.find(function(currentValue){
    return currentValue > 26;
})

console.log(result);

let numbers2 = [ 25, 18, 19, 98, 14, 39, 17, 18, 29]

let result2 = numbers2.map((num1) => {
    return 2 * num1;
})

console.log(numbers2);
console.log(result2);


let numbers3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

let result3 = numbers3.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue * currentValue;
}, 0);

console.log(result3);

const myObj = {
    name: "JavaScript",
    founder: "Brandon Eich",
    estd: "1995",
    ranking: '3'
};

let keys = Object.keys(myObj);
let values = Object.values(myObj);
let entries = Object.entries(myObj);

console.log(keys);
console.log(values);
console.log(entries);