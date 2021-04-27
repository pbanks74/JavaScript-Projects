function My_First_Function() {
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}
//Will display red when clicked
function myFunction() {
    var sentence = "I am watching Family Guy";
    sentence += " while completing this assignment";
    document.getElementById("Concatenate").innerHTML = sentence;
}
//Wrote a function using the += operator