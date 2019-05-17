
//psuedo coding
// a game with 4 crystls
// every crystal needs to have a random number
// therefore every crystal needs the for loop to generate a random number each time
// the random number should be generated every time you restart the game 
// wwhen the user starts a game there will be a random number
// user looses if their score is above the random number
// I think this will be a if/else statement to tell the computer to randomize the numbers and keep going or they loose. I think in the if/else there will be a for loop and in it "i" can't be larger than the random number generated. 
// the number of the crystals stay hidden until clicked
// this will be a function to hide and the onclick and then show. 

$(document).ready(function () {

    // Here we create a counter, we'll be using this to track the user's total.
    var tarNum = Math.floor(Math.random() * 70);;

    $("#Number-user-guesses").html(tarNum);

    var counter = 0;

    var win = 0;

    var loose = 0;

    var numberOption = [20, 6, 5, 12];

    for (var i = 0; i < numberOption.length; i++) {

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "./assets/images/clear crystal.jpg");

        imageCrystal.attr("src", "./assets/images/pink crystal.jpg");

        imageCrystal.attr("src", "./assets/images/purple crystal.jpeg");

        imageCrystal.attr("src", "./assets/images/blue crystal.jpg");

        imageCrystal.attr("data-crystalvalue", numberOption[i]);

        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        //Each time user clicks on a crystal the count goes up by 1.
        counter += crystalValue;

        $(".score").html(counter);

        if (counter <= tarNum) {
            var remainder = (tarNum - counter);
        }


        if (counter === tarNum) {
            alert("You won!");
            win++;
            counter = 0;
            alert(counter);
            remainder = 0;
            alert(remainder);
        }

        //Then output the number of times crystal is clicked 

        else if (counter >= tarNum) {
            alert("You loose!!");
            loss++;
            counter = 0;
            alert(counter);
            remainder = 0;
            alert(remainder);
        }
    });





});

