// HW for week 4, the crystal game. Instructions are included in the corresponding HTML file.

//declare all variables.
var wins_num = 0;

var losses_num = 0;

var user_points = 0;

var targetNumber = 0;

var cr1_num = 0;
var cr2_num = 0;
var cr3_num = 0;
var cr4_num = 0;


$(document).ready(function () {

    function reset_game() {
        user_points = 0;
        $("#points").text(user_points);
        // Randomly chooses a target number between 21 and 120.
        targetNumber = Math.floor(Math.random() * 100) + 21;
        $("#target").text(targetNumber);
        // Randomly chooses a target number between 2 and 11.
        //I purposely left out the number 1 for this because if a user was able to click 1, they could just use that crystal to win. 
        cr1_num = Math.floor(Math.random() * 10) + 2;
        cr2_num = Math.floor(Math.random() * 10) + 2;
        cr3_num = Math.floor(Math.random() * 10) + 2;
        cr4_num = Math.floor(Math.random() * 10) + 2;
        // each crystal image will be given a data attribute called data-crystalValue that's set to the corresponding cr number.
        $("#crystal1").attr("data-crystalvalue", cr1_num);
        $("#crystal2").attr("data-crystalvalue", cr2_num);
        $("#crystal3").attr("data-crystalvalue", cr3_num);
        $("#crystal4").attr("data-crystalvalue", cr4_num);
    }

    reset_game();

    $("#wins").text(wins_num);
    $("#losses").text(losses_num);


    // This function is run whenever the user clicks on a crystal image.
    $(".crystal-image").on("click", function () {

        // grabs the value of the crystal that was clicked 
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);

        //add the crystal value to user points
        user_points += crystalValue;
        $("#points").text(user_points);


        //check if user won
        if (user_points === targetNumber) {
            wins_num++;
            $("#wins").text(wins_num);
            alert("You won!");
            reset_game();
        }

        //check if user lost
        if (user_points > targetNumber) {
            losses_num++;
            $("#losses").text(losses_num);
            alert("You lost.");
            reset_game();
        }
    });
});
