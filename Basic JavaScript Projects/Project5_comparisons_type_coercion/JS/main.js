document.write(typeof 74); //Displays type of data *Number
document.write("20" + 20); // Coercion-Forces data together that doesnt match-string+number
document.getElementById(document.write(2E310)); //Disp;lays Infinity
document.getElementById(document.write(-3E310)); //Displays -Infinity
document.write(74>35); //Result is true
document.write(42>89); // Result is false 
console.log(5+5); //Performs math operation and displays result in console
console.log(106<2); //Displays false in the console 
document.write(10==10);  // 2 equals compares data to see if equal-results in true
document.write(15==9); // 2 equals comapres dats to see if equal results in false

x=50;
y=50;
z="red";
c="fifty"
d=74;

document.write(x===y); //Return true by ensuring to match the data type and value
document.write(x===z); //Return false by writing a different data type and different value.
document.write(x===c); //Return false by writing a different data type but the same value for both.
document.write(x===d); //Return false by writing the same data type but a different value for both.

document.write(10>3 && 7<15); //Returns true for AND statement
document.write(10>7 && 8>10); //Retsurns false for AND statement

document.write(5>10 || 10>2); //Returns true for OR statement
document.write(30>40 || 3>10); //Returns false for OR statement

function not_Function() {
    document.getElementById("Not").innerHTML = !(30 > 8)
}
//The ! (not) operator checks whether or not something is true-returns false

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}
//Creates a double nagative -changes the return to true