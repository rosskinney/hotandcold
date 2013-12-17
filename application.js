$(document).ready(function() {

    //Initial Variables

    var answer = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + answer);
    var numberOfGuesses = 0;
    var guesses = [];
    var distance = null;
    var previousDistance = null;

    function getGuess() {
        $("#submit").click(game);
        $("#guess").keydown(function(enter) {
            if (enter.keyCode == 13) {
                game();
            }
        });
    }

    getGuess();

    function game() {
        var guess = parseInt($("#guess").val());
        if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
            $("#guess").val("");
            numberOfGuesses += 1;
            guesses.push(guess);
            distance = Math.abs(answer - guess);
            previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
            if (guess === answer && numberOfGuesses !== 1) {
                $("#hint").text("Congrats! " + numberOfGuesses + " guesses!");
                $("body").css({
                    'background-image': 'url(fire-wallpaper.jpg)'
                });
                $("h1, h3").css({
                    'color': 'white'
                });
                $("h3").text("You guessed the number! Press the New Game button to try again!");
            } else if (guess === answer && numberOfGuesses === 1) {
                $("#hint").text("Congrats! " + numberOfGuesses + " guess!");
                $("body").css({
                    'background-image': 'url(fire-wallpaper.jpg)'
                });
                $("h1, h3").css({
                    'color': 'white'
                });
            } else if (guess > 100 || guess < 1) {
                $("#hint").text("Enter a number between 1 and 100!");
            } else {
                console.log(guess, answer, previousDistance, distance);
                if (isNaN(previousDistance)) {
                    if (guess > answer) {
                        $("#hint").text("Too high! Last guess: " + guess);
                    } else if (guess < answer) {
                        $("#hint").text("Too low! Last guess: " + guess);
                    }
                } else if (distance > previousDistance) {
                    $("#hint").text("Getting colder! Last guess: " + guess);
                } else if (distance < previousDistance) {
                    $("#hint").text("Getting warmer! Last guess: " + guess);
                } else if (distance === previousDistance) {
                    $("#hint").text("Getting very hot! Last guess: " + guess);
                }


            }
        } else {
            $('#hint').text('ERROR: Your guess must be a number between 1 and 100');
        }
    }

    $('#newgame').click(function(e) {
        location.reload();
        /*e.preventDefault();
            answer = Math.floor((Math.random() * 100) + 1);
            console.log(answer);
            numberOfGuesses = 0;
            guesses = [];
            distance = null;
            previousDistance = null;
            $('#hint').html('');
            $('#guess').val('');
            $('body').css({'background-image':'url(snow-background.jpg)'});
            $('h1,h3').css({'color':'rgb(4, 50, 39)'});*/
    });

    $("#cheat").click(function(e) {
        e.preventDefault();
        alert(answer);
    });
});








