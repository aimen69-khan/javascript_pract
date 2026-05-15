function arr(){
var arr = ["ahmed", "bilal", "shahid", "ali"];
var found = false;
var userInput = prompt("Enter Your Name??".toLowerCase());
for(var i=0; i<=name.length; i++){
    if(arr[i] === userInput.toLowerCase()){
     console.log("Your Name "+userInput+" Found!");
     found = true;
     break;
   }
 }
if(!found){
  console.log("Your Name "+userInput+" Not Found!");
}
}



function mainFunc(){
function add(a,b){
  return a + b;
}
function subt(a,b){
  return a - b;
}
function mult(a,b){
  return a * b;
}
function divi(a,b){
  return a / b;
}

var userInput1 = +prompt("Enter Your First Number??");
var userInput2 = +prompt("Enter Your Second Number??");
var userInput3 = prompt("Enter A operator (+,-,*,/)");

if(!isNaN(userInput1) && !isNaN(userInput2) && userInput3){
for(var i=0; i<1; i++){
  for(var j=0; j<2; j++){
    console.log(userInput1, userInput3 ,userInput2);
    if(userInput3 === "+"){
      console.log(add(userInput1, userInput2));
      
   }else if(userInput3 === "-"){
     console.log(subt(userInput1, userInput2));
     
   }else if(userInput3 === "*"){
     console.log(mult(userInput1, userInput2));
     
   }else if(userInput3 === "/"){
     console.log(divi(userInput1, userInput2));
     
   }
  }
 }
 
}else{
  console.log("Enter A Number And Opreator!!");
}
}

function aSlice(){
var type = "Ahmed Raza";
var retu = type.slice(0,6);
console.log(type.slice(0,6));
}



function mainSwitch(){
var number = ['23', '32', '67', '69'];
var name = ["ahmed", "bilal", "shahid", "ali"];
var opreator = ["+", "-", "*", "/"];

var userInput1 = prompt("Enter A Number??", '69');
var userInput2 = prompt("Enter A Name??", "ahmed");
var userInput3 = prompt("Enter A opreator", "+");
switch (true){
  case (number .includes(userInput1)):
    console.log("Your Number Found!");
    case (name .includes(userInput2)):
    console.log("Your name Found!");
    case (opreator .includes(userInput3)):
      console.log("Your Opreator Found!");
      break;
    default:
    console.log("Enter A Number Dammit");
}
}

function math(){
function add(a,b){
  return a + b;
}
function mult(a,b){
  return a * b;
}
function subt(a,b){
  return a - b;
}
function divi(a,b){
  return a / b;
}

const userInput1 = +prompt("Enter A Number");
const userInput2 = +prompt("Enter Another Number");
const userInput3 = prompt("Enter A Opreator (+, *, -, /)");

if(!isNaN(userInput1) && !isNaN(userInput2) && userInput3){
switch (true){
  case (userInput3 === "+"):
    console.log(add(userInput1, userInput2));
    break;
    case (userInput3 === "*"):
      console.log(mult(userInput1, userInput2));
      break;
      case (userInput3 === "-"):
        console.log(subt(userInput1, userInput2));
        break;
        case (userInput3 === "/"):
         console.log(divi(userInput1, userInput2));
         break;
         default:
         console.log("Again WHAT ARE U DOING");
}
}else{
  console.log("Enter a number And Opreator!! WHAT ARE U DOING??");
}
}


function aWhile(){
function add(a,b){
  return a + b;
}
function mult(a,b){
  return a * b;
}
function divi(a,b){
  return a / b;
}
function subt(a,b){
  return a - b; 
}

const opreat = ["+", "-", "/", "*"];
let first = +prompt("Enter a number?");
let second = +prompt("enter another number?");
let thrid = prompt("OPREATOR (+, *, /)");

while(!opreat .includes(thrid)){
  first = +prompt("Try again1");
  second = +prompt("Try Again2");
  thrid = prompt("Try again3");
}
if(!isNaN(first) && !isNaN(second) && thrid){
    console.log(first, thrid, second);
switch (thrid){
  case "+":
    console.log(add(first, second));
    break;
    case "*":
      console.log(mult(first, second));
      break;
        case "/":
         console.log(divi(first, second));
         break;
          case "-":
          console.log(subt(first, second));
          break;
           default:
            console.log("Again WHAT ARE U DOING!!");
}
}else{
  console.log("Invalid Number OR OPREATOR");
}
}


function doWhile(){
let i=0;
do{
  console.log("It Worked 1 Time");
  i++
}while(i<=2);


let password;
do{
  password = prompt("Enter your password");
}while(password !== "Ahmed Raza");
console.log("Your password Found!");
}




function nastedIf(){
let country = ["japan", "qatar", "pakistan"];
let proived = ["shabo", "punjab", "sindh"];
let cities = ["tokyo", "lahore", "karachi"];

let coun = prompt("Enter Your Country", 'qatar').toLowerCase();
let proiv = prompt("Enter Your proivced", 'punjab').toLowerCase();
let city = prompt("Enter Your City", 'lahore').toLowerCase();

if(country .includes(coun)){
  console.log("Your Country "+coun+" Found!");
  if(proived .includes(proiv)){
    console.log("Your proivced "+proiv+" Found!");
    if(cities .includes(city)){
      console.log("Your City "+city+" Found!");
    }else{
      console.log("Your City "+city+" Not Found!");
    }
  }else{
    console.log("Your proivced "+proiv+" Not Found!");
  }
}else{
  console.log("Your Country "+coun+" Not Found!");
}
}

function anotherWhile(){
let country = ["japan", "pakistan"];
let found = false;
let userOutput = prompt("Enter Your Country".toLowerCase());
while(!country.includes(userOutput)){
  userOutput = prompt("Try Again!");
}
for(let i=0; i<=country.length; i++){
  if(country[i] === userOutput .toLowerCase()){
    console.log("Your Country " +userOutput+ " Found!!");
    found = true;
    break;
  }
}if(!found){
  console.log("Your Country " +userOutput+ " Not Found!!");
  }
}


// var name = ["hello world", "2121"];
// var userOutput = prompt("Enter A Data Type!".toLowerCase());
// while(!name.includes(userOutput.toLowerCase())){
//   userOutput = prompt("Try Again");
// }
// console.log(userOutput);




// var arr = ["karachi", "lahore", "islamabad"];
// var flag = false;
// var userInput = prompt("Enter Your City name?".toLowerCase());
// for(var i=0; i<=arr.length; i++){
//   if(arr[i] === userInput.toLowerCase()){
//     console.log("Found!");
//     flag = true;
//     break;
//   }
// }if(!flag){
//   console.log("Not Found!");
// }

function aio(){
function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mut(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}

let opreator = ["+", "-", "*", "/"];
let userOutput1 = +prompt("Enter Your First number?");
let userOutput2 = +prompt("Enter Your Second Number?");
let userOutput3 = prompt("Enter Opreator (+ , - , * , /)");

while(!opreator.includes(userOutput3)){
  userOutput1 = +prompt("Try again1");
  userOutput2 = +prompt("Try again2");
  userOutput3 = prompt("Try again3");
}

if(!isNaN(userOutput1) && !isNaN(userOutput2) && userOutput3){
  console.log(userOutput1, userOutput3, userOutput2);
switch(userOutput3){
  case "+":
    console.log(add(userOutput1, userOutput2));
     break;
      case "-":
        console.log(sub(userOutput1, userOutput2));
         break;
          case "*":
            console.log(mut(userOutput1, userOutput2));
             break;
              case "/":
                console.log(div(userOutput1, userOutput2));
                break;
                 default:
                  console.log("Invalid Opreator OR Number");
}
}else{
  console.log("Enter A number And Opreator");
}
}

function fillCity(){
  var cityName;
  var city = document.getElementById("zip").value;
switch(city){
  case "200":
  cityName = "Karachi";
  break;
  case "300":
  cityName = "Lahore";
  break;
  case "400":
  cityName = "Islamabad";
  break;
  case "500":
  cityName = "Rawalpandi";
  break;
  default:
  cityName = "City Not Found!";
}
document.getElementById("city").value = cityName;
}





function fillcity(){
  var city = document.getElementById("zip");
  city.style.backgroundColor = "red";
}

function cityblur(){
  var city = document.getElementById("zip");
  city.style.backgroundColor = "blur";
}




function para(){
  var par = document.getElementById("para_1");
  para_1.innerText = "lorem20 kdjjdvkkj";
}
function para2(){
  para_1.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente asperiores dolor debitis vitae harum dolorum, sit facere dolorem. Ipsa praesentium, ex, sapiente modi tempore ab? Aperiam nulla error laudantium aliquam quia asperiores, eaque iure distinctio. Maxime eius officiis nam id! At dolore ducimus nemo numquam quos quia libero harum, impedit iste esse! Quisquam aperiam quae praesentium minima recusandae voluptatum sapiente autem omnis eligendi. Corporis distinctio voluptates soluta id, voluptatem cumque omnis delectus accusantium voluptate, perferendis tempora fugiat dolore nemo blanditiis esse praesentium, nesciunt labore! Nihil, voluptatem, fuga quisquam, minus porro accusamus ullam minima ratione iusto illo vitae, dicta natus. Error!";

}

function tellOn(){
let lang = ["html", "css", "javascript", "typescript", "python", "nodejs"];
let flag = false;
let userInput = prompt("What programing languages do u know??".toLowerCase());

while(!lang.includes(userInput)){
  userInput = prompt("Try Again!");
}
if(lang.includes(userInput).toLowerCase()){
  console.log("WOW You know "+userInput);
  flag = true;
}
if(!flag){
  console.log("NOT Found");
}
}

let num = Math.random() * 10;
num = Math.ceil(num);
let userInput = +prompt("Enter Random Number!",num);
if(num === userInput){
  console.log("Your Number "+userInput+" Found!");
}else{
  console.log("NOT Found!");
}


function ada(){
  for(let i=0; i<=3; i++){
    console.log("Hello World!");
    for(let j=0; j<=4; j++){
      console.log("Hello World!");
     if(true){
       console.log("Hello World!");
       if(true){
         console.log("Hello World!");
         if(true){
           console.log("Hello World!");
           if(true){
             console.log("Hello World!");
             if(true){
               console.log("Hello World!");
       }
      }
     }
    }
   }
  }
 }
}



// let names = ["Facebook", "Whatsapp", "YouTube", "Google"];

// let name = {
//     "name": "Facebook",
//     "type": "app",
//     "age": 22,
//     "good": true
// }

// let stringy = JSON.stringify(name);
// let strin = JSON.stringify(names);
// console.log(stringy);
// console.log(strin);



// let name = ["Facebook", "Whatsapp", "YouTube", "Google"];
// let typ = `{
//      "name": "Facebook", "type": "app", "age": 22, "good": true
// }`

// let age = `[{

//     "name": "Facebook",
//     "type": "app",
//     "age": 22,
//     "good": true

// },
// {
//     "name": "Youtube",
//     "type": "app",
//     "age": 21,
//     "good": true 
// },
// {
//     "name": "Whatsapp",
//     "type": "app",
//     "age": 17,
//     "good": true 
// },
// {
//     "name": "Google",
//     "type": "app",
//     "age": 27,
//     "good": true 
// }]`

// let blue = JSON.parse(typ);

// console.log(typ);




// fetch("name.json")
//   .then(response => response.json())
//   .then(value => values.array.forEach(value => console.log(value.name)));




