function countFunction() {  //Basic Counting Function
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {  //Basic for loop
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Instrument_List").innerHTML = Content;
}

function dog_Pictures () {  //Array Function
    var Dog_Picture = [];
    Dog_Picture[0] = "running";
    Dog_Picture[1] = "sleeping";
    Dog_Picture[2] = "playing";
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + ".";
}

function constant_function() {  //Constant Function
    const Vehicle = {type:"SUV", make:"Nissan", color:"Red"};
    Vehicle.color = "blue";  
    Vehicle.price = "$30,000";
    Vehicle.transmission = "manual transmission "; //added property with value
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Vehicle.type + " was " + Vehicle.price; // Displays String With Added Property
    document.getElementById("Constant_2").innerHTML = "The cost of the " + 
    Vehicle.transmission + Vehicle.type + " was " + Vehicle.price;
}

var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("Fun").innerHTML = x;

function returnFunction(name) { //Utilizes return statement
    return "Hello " + name;
  }
  document.getElementById("Return").innerHTML = returnFunction("Paul");

  let dog = {  //Utilized the Let Keyword to create an object with properties 
      species: "Terrier ",
      subspecies: "Yorkshire ",
      years: "13 ",
      color: "black ",
      description : function() {
          return "The dog is a " + this.years + "year old " + this.color + this.subspecies + this.species; 
          }
  };
  document.getElementById("dog_Object").innerHTML = dog.description();

  var text = "";  //Break Statement
  var z;
  for (z = 0; z < 10; z++) {
      if (z === 3) { break; }
      text += "The number is " + z + "<br>";
  }
  document.getElementById("break").innerHTML = text;

  var text = "";  //Continue Statement
var y;
for (y = 0; y < 10; y++) {
  if (y === 3) { continue; }
  text += "The number is " + y + "<br>";
}
document.getElementById("continue").innerHTML = text;