// Making Random Number Generator

let randomNumberGenerator = Math.floor( 1 + 5*Math.random() );


let guessRandomNumber = () => {
        // Setting up userGuess
        function userGuess(correct,incorrect) {
        var userNumber = Number( document.getElementById("guess").value);
        document.getElementById("question").value = "";
        if ( isNaN(userNumber)|| userNumber < 1 || userNumber > 5) {
            document.getElementById("question").innerHTML = 
            ('Bad Input! Please try again with an integer between 1 and 5')
        } else if (userNumber == randomNumberGenerator) correct() 
        else incorrect();
        }

        userGuess(
            function correct() {document.getElementById("question").innerHTML = 
            (`Congratulations! <br> You guessed correctly!<br>I've picked a new number, Try again!`);
            randomNumberGenerator = Math.floor( 1 + 5*Math.random() );
            console.log(randomNumberGenerator) },
            function incorrect() {document.getElementById('question').innerHTML = (
                `You guessed incorrectly, please try again!`
            );}
        );
}

        // Event Listeners 
function handle(e){
    e.preventDefault();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Original Script, before throwing in all the DOM elements. // 

// function gameGuessRandomNumber(min = 1, max = 10) {
//      // Setting up random number generator
//     min = Math.ceil(min);
//     max = Math.floor(max);
//      // Saving random number into variable named randomNumber
//     let randomNumber = Math.floor(Math.random() * (max - min)) + min;
//      //console.log(randomNumber);
//      // Setting up User's random number guess
//     function userGuess(num, correct, incorrect) {    
//         if (num == randomNumber) correct() 
//     else incorrect();
//     }

//     userGuess(
//     prompt("Please guess a number between 1 and 10"),
//         function () { alert("Correct! Please play again.");},
//         function () { alert(`Incorrect, The number was ${randomNumber}! Dice rolled! New number...Try again`);}
//     );

// }

// gameGuessRandomNumber();




