function my_Dictionary() { //Dictionary that outputs a key-value pair
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Yorkshire Terrier",
        Age:13,
        Sound:"GRRRR"
    };
    delete Animal.Sound; //delete statement that removes the key before its value is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

