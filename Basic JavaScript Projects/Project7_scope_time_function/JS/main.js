
var X = 25; //GLOBAL variable -- works in all functions
function Add_numbers_1 () {
    document.write(50 + X + "<br>");
}
function Add_numbers_2() {
    document.write(75 + X + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 15; // LOCAL variable, only works within this one function
    document.write(30 + Y);
}
function Add_numbers_4() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4(); //Will not display so used console.log method above to find out why

function get_Date() { //If statement using date method
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Hope your having a great day!";
    }
}

function my_ownFunction() {  //my own if statement
    x = 10;
    if (x > 5) {
        document.getElementById("Math").innerHTML = "x is greater than 5";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Vote = "You are old enough to rent a car";
    }
    else {
        Vote = "You are not old enough to rent a car";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}