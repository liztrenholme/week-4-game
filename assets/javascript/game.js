$(document).ready(function() {

//random number to guess and gem number generation

    var randomNumber = Math.floor((Math.random() * 120) + 1);
    console.log(randomNumber);
    $("#numberGoal").text(randomNumber);

    var crystalNum = function() {
        return Math.floor((Math.random() * 12) + 1);
    }

    var redCrystal = crystalNum();
    var blueCrystal = crystalNum();
    var yellowCrystal = crystalNum();
    var greenCrystal = crystalNum();

    var wins = 0;
    var losses = 0;
    var score = 0;

