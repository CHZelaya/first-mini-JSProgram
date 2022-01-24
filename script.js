//Setting up initial variables

// Creating a random number
const genereateRandomNumber = () => Math.floor(1 + 100 * Math.random());
let randomNumberGenerator = genereateRandomNumber()
console.log("The Random Number is:", randomNumberGenerator);

// Returning Users guess

let getGuess = () => {
        return Number(document.getElementById('guess').value)
};

// Function to call to start the game, along with if...else statements

let checkGuess = () => {
        let guess = getGuess();
        let difference = 0;
        console.log('The users guess is :', guess)
        if (isNaN(guess) || guess < 0 || guess > 100)
                return (document.getElementById(
                        "question"
                ).innerHTML = `Bad Input! Please enter an integer between 1 and 100`),
                        clearInput();
        else if (guess == randomNumberGenerator) {
                return correct();

        } else if (guess < randomNumberGenerator) {
                difference = randomNumberGenerator - guess;
                console.log('The difference between the two numbers is:', difference);

        } else if (guess > randomNumberGenerator) {
                difference = guess - randomNumberGenerator;
                console.log('The difference between the two numbers is:', difference);

        } if (difference >= 1 && difference <= 5) {
                return hottest();

        } else if (difference > 5 && difference <= 15) {
                return hotter();

        } else if (difference > 15 && difference <= 30) {
                return hot();

        } else if (difference > 45 && difference <= 64) {
                return cold();

        } else if (difference < 65) {
                return coldest();
        }
};

// Functions to run depending on outcome of game

let correct = () => {
        randomNumberGenerator = genereateRandomNumber();
        document.getElementById(
                "question"
        ).innerHTML = `Congratulations! <br> You guessed correctly <br/>I've picked a new number, Try again!`;
        clearInput();
        console.log("The new random number is:", randomNumberGenerator);
};

let hot = () => {
        return document.getElementById("question").innerHTML = `You're warm...`,
                clearInput();

};
let hotter = () => {
        document.getElementById(
                "question"
        ).innerHTML = `You're getting hotter!`;
        clearInput();
};

let hottest = () => {
        document.getElementById("question").innerHTML = `You're on fire!!`;
        clearInput();
};

let cold = () => {
        document.getElementById(
                "question"
        ).innerHTML = `It's getting a wee bit nipply...`;
        clearInput();
};

let coldest = () => {
        document.getElementById(
                "question"
        ).innerHTML = `So cold, you're frozen solid.`;
        clearInput();
};

let clearInput = () => {
        document.getElementById("guess").value = " ";
};

function handle(e) {
        e.preventDefault();
}
