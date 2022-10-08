var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var buttonClicked = $('.btn');
var userClickedPattern = [];

function nextSequence(max) {
    // generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber)
    // new variable called randomChosenColour and use the randomNumber above to select a random colour from the buttonColours array.
    var randomChosenColor = buttonColors[randomNumber]

    // Add the new randomChosenColour generated above to the end of the gamePattern.
    gamePattern = gamePattern.push(randomChosenColor);
    console.log("gamepattern", gamePattern);

    setInterval(() => {$('#' + randomChosenColor).fadeOut().fadeIn()},500);

    var queryRandomId = $('#' + randomChosenColor);
    var audio 
    switch (queryRandomId) {
        case green:
            audio = new Audio('sounds/green.mp3')
            audio.play();
            break;

        case red:
            audio = new Audio('sounds/red.mp3')
            audio.play();
            break;

        case yellow:
            audio = new Audio('sounds/yellow.mp3')
            audio.play();
            break;

        case blue:
            audio = new Audio('sounds/blue.mp3')
            audio.play();
            break;
    
        default:
            audio = new Audio("sounds/wrong.mp3")
            audio.play();
            break;
    }

    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
};

// handle button clicked to get button id
function handleButtonClicked() {
    var userChosenColor = $(this).attr('id');
    // add the contents of the var userChosenColor to the end of the userClickedPattern
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
};


// function that play sound when a a button clicked


buttonClicked.on('click', handleButtonClicked);
nextSequence(4)

