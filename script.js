function gameGuessRandomNumber(min = 1, max = 10) {
     // Setting up random number generator
    min = Math.ceil(min);
    max = Math.floor(max);
     // Saving random number into variable named randomNumber
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
     //console.log(randomNumber);
     // Setting up User's random number guess
    function userGuess(num, correct, incorrect) {    
        if (num == randomNumber) correct() 
    else incorrect();
    }

    userGuess(
    prompt("Please guess a number between 1 and 10"),
        function () { alert("Correct! Please play again.");},
        function () { alert(`Incorrect, The number was ${randomNumber}! Dice rolled! New number...Try again`);}
    );

}

// gameGuessRandomNumber();

let randomNumber = Math.floor( 1 + 10*Math.random() );

console.log(randomNumber);

function guessRandomNumber() {
        // Setting up userGuess
        function userGuess(correct,incorrect) {
        var userNumber = Number( document.getElementById("guess").value);
        document.getElementById("question").value = "";
        if ( isNaN(userNumber)|| userNumber < 1 || userNumber > 10) {
            document.getElementById("question").innerHTML = 
            ('Bad Input! Please try again with an integer between 1 and 10')
        } else if (userNumber == randomNumber) correct() 
        else incorrect();
        }

        userGuess(
            function correct() {document.getElementById("question").innerHTML = 
            (`The number I picked was ${randomNumber} You guess correctly! Congratulations`);},
            function incorrect() {document.getElementById('question').innerHTML = (
                `The number I picked was ${randomNumber} You guessed incorrectly, please try again!`
            );}
        );
}





        // Event Listeners 

document.getElementById("guess-button").onclick = guessRandomNumber();