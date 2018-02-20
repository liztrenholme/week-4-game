$(document).ready(function() {

var wins = 0;
var losses = 0;
var score = 0;

// generates random number for goal of game
var randomNumber = Math.floor((Math.random() * 120) + 1);
    $("#numberGoal").text(randomNumber);

// function to give each star its mystery number
function starNum() {
    return Math.floor((Math.random() * 12) + 1);
}

// starts new round after win or lose
function resetGame() {
    randomNumber = Math.floor((Math.random() * 120) + 1);
    $("#numberGoal").text(randomNumber);
    redStar = starNum();
    blackStar = starNum();
    yellowStar = starNum();
    greenStar = starNum();
}

// assigning random numbers to the stars by calling the starNum function
var redStar = starNum();
var blackStar = starNum();
var yellowStar = starNum();
var greenStar = starNum();

// determines if user has won or lost round
var winOrLose = function () {
    if (score === randomNumber) {
        alert("Yay!  You've saved Earth!");
        wins++;
        $("#wins").text(wins);
        score = 0;
        $("#score").text(score);
        resetGame();
    }
    else if (score > randomNumber) {
        alert("Oh noes!!!  Planet Earth has been destroyed!");
        losses++;
        $("#losses").text(losses);
        score = 0;
        $("#score").text(score);
        resetGame();
    }

   if ((score === randomNumber) || (score > randomNumber)) {
        resetGame(); 
         
    }
}

// star clicks and updates to score
$("#redStar").on("click", function() {
    score = score + redStar;
    $("#score").text(score);
    winOrLose();
});

$("#blackStar").on("click", function() {
    score = score + blackStar;
    $("#score").text(score);
    winOrLose();
});

$("#yellowStar").on("click", function() {
    score = score + yellowStar;
    $("#score").text(score);
    winOrLose();
});

$("#greenStar").on("click", function() {
    score = score + greenStar;
    $("#score").text(score);
    winOrLose();
    });

});