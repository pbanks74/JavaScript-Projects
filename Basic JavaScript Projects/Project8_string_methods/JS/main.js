function full_Sentence() { //combijnes all variables into one string.
    var part_1 = "This sentence "
    var part_2 = "is made of "
    var part_3 = "4 different variables "
    var part_4 = "concated into one string."
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

function slice_Method() {  //pulls and displays a section of text
    var Sentence = "All this coding makes me very thirsty!";
    var Section = Section = Sentence.slice(25,38);
    document.getElementById("Slice").innerHTML = Section;
}

function UpperCase() { //changes to all uppercase
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function search_Function() { //utilizes search method function
    var str = "Visit The Tech Academy";
    var n = str.search("The Tech Academy");
    document.getElementById("Example").innerHTML = n;
}

function string_Method() {  //displayed a string
    var X = 252;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //pecision method
    var Z = 15258.2348592573648;
    document.getElementById("Shorten").innerHTML = Z.toPrecision(8);
}

function fixedFunction() {  //Rounds the integer to a fixed amount of digits
    var num = 5.56789;
    var n = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
}

function myFunction4() {  //Returns primitive value
    var str = "Hi There!";
    var res = str.valueOf();
    document.getElementById("Primitive").innerHTML = res;
  }