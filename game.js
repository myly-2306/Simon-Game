var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var buttonClicked = $('.btn');
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("Level" + " " + level)
        nextSequence();
        started = true;
    }
});


function nextSequence() {

    // when nextSequence() is triggered, reset userClickedPattern to an empty array
    userClickedPattern = [];

    levelUp = level++;
    $("#level-title").text("Level" + " " + levelUp);

    // generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber)

    // new variable called randomChosenColour and use the randomNumber above to select a random colour from the buttonColours array.
    var randomChosenColor = buttonColors[randomNumber]

    // Add the new randomChosenColour generated above to the end of the gamePattern.
    gamePattern.push(randomChosenColor);
    console.log("gamepattern", " ", gamePattern);

    setTimeout(() => {$('#' + randomChosenColor).fadeOut().fadeIn()},500);

    

};

// handle button clicked to get button id
function handleButtonClicked(event) {
    event.preventDefault();

    var userChosenColor = $(this).attr('id');
    // console.log("user chosen color" + userChosenColor)

    // add the contents of the var userChosenColor to the end of the userClickedPattern
    userClickedPattern.push(userChosenColor);
    console.log("user click pattern" + " " + userClickedPattern)

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
};


// function that play sound when a a button clicked
function playSound(name) {
    // var queryRandomId = $('#' + randomChosenColor);
    // var queryRandomId = $(name);
    // console.log("name",name)
    var audio 
    switch (name) {
        case "green":
            audio = new Audio('sounds/green.mp3')
            audio.play();
            break;

        case "red":
            audio = new Audio('sounds/red.mp3')
            audio.play();
            break;

        case "yellow":
            audio = new Audio('sounds/yellow.mp3')
            audio.play();
            break;

        case "blue":
            audio = new Audio('sounds/blue.mp3')
            audio.play();
            break;
    
        default:
            // audio = new Audio("sounds/wrong.mp3")
            // audio.play();
            break;
    }
    // alternatively, this is the short way
    // var audio = new Audio("sounds/" + name + ".mp3");
    // audio.play();
}


// function to display animation when button is clicked
function animatePress(currentColor) {
    $('#' + currentColor).addClass("pressed");

    setInterval(function(){
        $('#' + currentColor).removeClass("pressed")
    },100);
}


// function to check user answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
        console.log("success")
        // check if the user have finshed their sequence
       if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            },1000)
            console.log("userPattern Length" + " " + userClickedPattern.length)
            console.log("gamePattern Length" + " " + gamePattern.length)
        }
    } else {
        console.log("wrong");
        audio = new Audio("sounds/wrong.mp3")
        audio.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart")
        setTimeout( () => {
            $("body").removeClass("game-over");
        }, 500);

        startOver();
    }
    

    console.log("user current level" + " " +  userClickedPattern[currentLevel])
    console.log("game level" + " " + gamePattern[currentLevel])
};


// function to restart the game when users get the sequence wrong
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

buttonClicked.on('click', handleButtonClicked);

// if nextSequence is trigged outside of functions, the game will start right away and skip the entry h1 line.
// nextSequence()

