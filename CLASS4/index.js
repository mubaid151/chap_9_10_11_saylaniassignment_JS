var city = prompt("Please enter your CITY name")

if(city === "karachi"){
    alert("welcome to karachi")
}

var genderm = prompt("Please enter your gender name")

if(genderm === "male"){
    alert("Good morning Sir!!!")
}
else if(genderm === "female"){
    alert("Good morning Maam!!!")
}

var color = prompt("Enter traffic colors")
if(color === "red"){
    alert("must stop!!")
}
else if(color === "yellow"){
    alert("ready to move!!!")
}
else if(color === "green"){
    alert("move now!!!")
}

var feul = +prompt("Enter your remaining feul")

if(feul <= "" &&  feul > 0.25 ){
    alert("Thanks......")
}
else if(feul <= "0.25") {
    alert("please refill the feul in your car......")
}

var a = 4;

if(++a === 5){
    alert("The given condition is true");
}

var b = 82;

if(b++ === 83){
    alert("The given condition for variable b is not true");
}

var c = 12;

if(c++ === 13){
    alert("condition 1 is true");
}

if(c === 13){
    alert("condition 2 is true");
}

var materialcost = 2000;
var laborcost = 2000;
var totalcost = materialcost + laborcost;
if(totalcost === materialcost + laborcost){
    alert("The total cost is :" + totalcost)

}

var sub1 = prompt("Please enter subject 1 name");
var sub2 = prompt("Please enter subject 2 name");
var sub3 = prompt("Please enter subject 3 name");
var totalmarks = alert("total marks for each subject is 100")
var obtsub1 = +prompt("please enter obtaining marks of sub1");
var obtsub2 = +prompt("please enter obtaining marks of sub2");
var obtsub3 = +prompt("please enter obtaining marks of sub3");
var totalobtmarks = obtsub1 + obtsub2 + obtsub3;
var percentage = totalobtmarks / 300 * 100;
console.log(sub1);

console.log(sub2);

console.log(sub3);

console.log(totalmarks);

console.log(obtsub1);

console.log(obtsub2);

console.log(obtsub3);

console.log("total obtaining marks: " + totalobtmarks);
console.log("Your percentage is: " + percentage +"%");
alert("total obtaining marks: " + totalobtmarks);
alert("Your percentage is: " + percentage +"%");

if(percentage >= 80){
    alert("your grade is A-ONE \n EXCELLENT");
}
else if(percentage >= 70){
    alert("your grade is A \n GOOD");
}

else if(percentage >= 60){
    alert("your grade is B \n YOU NEED TO IMPROVE");

}
else if(percentage < 60){
    alert("your grade is FAIL \n SORRY");
    
}