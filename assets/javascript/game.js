$(document).ready(function() {

//random number to guess and gem number generation

    var randomNumber = Math.floor((Math.random() * 120) + 1);
    console.log(randomNumber);
    $("#numberGoal").text(randomNumber);

    var starNum = function() {
        return Math.floor((Math.random() * 12) + 1);
    }

    var redStar = crystalNum();
    var blackStar = crystalNum();
    var yellowStar = crystalNum();
    var greenStar = crystalNum();

    var wins = 0;
    var losses = 0;
    var score = 0;

