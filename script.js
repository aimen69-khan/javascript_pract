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
// var retu = type.slice(0,6);
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
