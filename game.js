var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(max) {
    // generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber)
    // new variable called randomChosenColour and use the randomNumber above to select a random colour from the buttonColours array.
    var randomChosenColor = buttonColors[randomNumber]

    // Add the new randomChosenColour generated above to the end of the gamePattern.
    gamePattern = gamePattern.push(randomChosenColor);
};

nextSequence(4)

