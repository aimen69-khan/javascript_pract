function aAlert(){
alert('animal');
alert("Hi World!");
var b = prompt("enter your age");
console.log(number + age ('2'));

var userInput;
userInput
if(true){
  console.log(userInput);
}else{
  console.log("Hello world!");
}
}


function ifElse(){
if(2===2){
  if(2===2){
  console.log(userInput);
  console.log("My name is Ahmed Raza and I am going to saylani mass it training and I am learning web development.");
  }else{
    console.log("Inner If Not Working");
  }
  
}else{
  console.log("NOT Working");
}

let userInput = +prompt("enter your number");
for(var i=1; i<=10; i++){
  console.log(userInput+" x " +i+ " = " +userInput*i)


let age=23;
age=78;

const name=98;

var a=09;
var a=98;
var a=78;
console.log(a);

}
}

function nastedIf(){
if(2!==2){
  if(3!==3){
    if(4!==4){
      console.log("Hello World!");
    }else{
      console.log("not working 4!");
    }
  }else{
    console.log('Not working 3!');
  }
}else{
  console.log("All conditions False working!")
}
}


function number(){
var arr = ['Karachi', 'lahore', 'islambad'];

console.log(typeof(arr[arr.length-1]));

if(2===2){
  var userInput = +prompt("enter your number", 2);
  console.log(userInput);
}
var arr = ['mango', 'banana', 'grape'];

for(var i = 0; i <= 3; i++){
  console.log(arr);
  console.log('Hello world!');
}

// document.querySelector('body').style.background = "blueviolet";
// document.getElementById("demo").style.color = "blue";
}

function aArray(){
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
  console.log(fullNames);



var fruite = ['orange', 'mango', 'grape'];
var userOutput = prompt("Enter Your Fav fruite");
var flag = false;
for(var j=0; j<fruite.length; j++){
  if(fruite[j] === userOutput){
    console.log("I Also like " +userOutput +".");
    flag= true;
    break;
  }
}
if(!flag){
  console.log(userOutput+ " :Not found!");
}
var arr = ['karachi', 'lahore', 'faisalabad', 'rawalpindi', 'multan', 'islamabad'];
var found = false;
var workAfter = false;
var userInput = prompt("Enter Your City");
for(var i=0; i<arr.length; i++){
  if(arr[i] === userInput){
    console.log("welcome to " +userInput +".");
    found = true;
    workAfter = true;
    if(workAfter){
      console.log("Found!");
    }
    break;
  }
}
if(!found){
  console.log(userInput +" :Not Found!");
}
var country = ['pakistan', 'china', 'japan', 'iran', 'usa'];
var workFound = false;
var userOnput = prompt("enter Your country");
for(var a=0; a<country.length; a++){
  if(country[a] === userOnput){
    console.log("Welcome to " +userOnput)
    workFound = true;
    break;
  }
}
if(!workFound){
  console.log(userOnput+ " :Not Found!");
}
}

function nastedFor(){
for(var i=0; i<5; i++){
  for(var j=0; j<4; j++){
    for(var t=0; t<5; t++){
      for(var k=0; k<=2; k++){
        console.log("Hello World!");
      }
      console.log("Hello World!");
    }
    console.log("Hello World!");
  }
  console.log("Hello World!");
}


var name = "hello WOrLd";
console.log(name.chartAt);

var type = "My name is Ahmed";
}


function randomNumber(){
var name = [3, 9, 6];
var userInput = prompt("Pick Any Number Between 1 - 10", 6);

if(name.includes(Number(userInput))){
  console.log("Found!");

}else{
  console.log("Not Found!");
}

var num = Math.random() * 10;
num = Math.ceil(num);

var userInput = Number(prompt("Guess Any Number", num));
if (num === userInput){
  console.log("Win")
} else{
  console.log("Try Again")
}
 }


function tellTime(){

var js = 123456789;
console.log(js .toString());
console.log(typeof(js));


var java = 3.6;
console.log(Math.round(java));

var js = 4.7;
console.log(Math.floor(js));

var num = 5.8;
console.log(Math.ceil(num));


console.log(new Date().getDay());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().getTime());


var name = "AHMED RAZA";
console.log(name.toLowerCase());



var name = 'Karachi';
console.log(name .charAt(7));

var num = "karachi";
console.log(num.replace('k', 'KL'));


var what = 45.4;
console.log(Math.round(4.3));

var what = 4.6;
console.log(Math.floor(3.8));

var what = 5.3;
console.log(Math.ceil(4.2));
}


function work(){

function sum(a,b){
  return a + b;
  
}function subt(a,b){
  return a - b;
  
}function mult(a,b){
  return a * b;
  
}function div(a,b){
  return a / b;
  
}
var userInput_1 = +prompt("Enter Your First Number?", 55);
var userInput_2 = +prompt("Enter Your Second Number?", 30);
var userInput_3 = prompt("Enter Operator (+, -, *, /)", "+");

for(var i=0; i<=4; i++){
  for(var j=0; j<=2; j++){
    console.log(userInput_1, userInput_3, userInput_2);
   if(userInput_3 === "+"){
  console.log(sum(userInput_1, userInput_2));
}
  else if(userInput_3 === "-"){
  console.log(sub(userInput_1, userInput_2));
}
   else if(userInput_3 === "*"){
  console.log(mult(userInput_1, userInput_2));
}
  else if(userInput_3 === "/"){
  console.log(div(userInput_1, userInput_2));
}else{
  console.log("Invalid");
}
 }
  }
   }


function city(){
var arr = ['karachi', 'lahore'];
var userInput = prompt("Enter Your City", 'karachi');
var found = false;
for(var i=0; i<=arr.length; i++){
  if(arr[i] === userInput.toLowerCase){
    console.log("I Also live in " +userInput.toLowerCase);
    found = true;
    break;
  }
}if(!found){
  console.log("City Not Found");
}
}


// var an = 40;
function print(){
  an = 30;
  console.log(an);
  var an = 90;
  console.log(an);
}


function favFruite(){
var arr = ['grape', 'mango'];
var found = false;
var userInput = prompt("Enter Your Fav Fruite??".toLowerCase());
for(var i=0; i<=arr.length; i++){
  if(arr[i] === userInput.toLowerCase()){
    console.log("I Also like "+userInput);
    found = true;
    break;
  }
}if(!found){
  console.log(userInput+" Not Found");
}
}