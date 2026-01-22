const levels = {
    easy: {
        maxGuesses: 12
    },
    medium: {
        maxGuesses: 7
    },
    hard: {
        maxGuesses: 3
    }

}

let playAgain = true;

while (playAgain) {
    let name = prompt("Enter your name: ");
    alert(`Welcome ${name}! Let’s play Guess the Number!`)
    let choosenLevel = prompt("Choose a difficulty level(Easy, Medium, Hard): ");

    advancedGuessingGame(choosenLevel, name)

    let again = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (again !== "yes") {
        playAgain = false;
        alert("Thanks for playing! Goodbye!");
    }

}

function advancedGuessingGame(choosenLevel, name) {

    let levelKey = choosenLevel.toLowerCase();

    if (levelKey in levels) {

        let arr = [];
        let maxGuesses = levels[levelKey].maxGuesses;

        let numberToGuess = Math.floor(Math.random() * 100 + 1);
        console.log(numberToGuess);

        for (let i = 1; i <= maxGuesses; i++) {

            let numberFromPlayer = Number(prompt(`Attempt ${i}/${maxGuesses}: Guess a number (1–100)`));

            if (isNaN(numberFromPlayer) || numberFromPlayer < 1 || numberFromPlayer > 100) {
                alert("Please enter a valid number between 1 and 100!");
                i--;
                continue;
            }

            arr.push(numberFromPlayer)

            let difference = Math.abs(numberToGuess - numberFromPlayer);

            if (difference === 0) {
                alert(`YES! You got it! That’s the number!`);
                alert(`Congratulations ${name}! You guessed the number`);
                console.log(`Your guesses: ${arr}`)
                return;
            } else if (difference >= 1 && difference <= 5) {
                alert(`WOW! That was super close! The number is shaking!`);
            } else if (difference >= 6 && difference <= 10) {
                alert(`Nice try! You’re getting warmer!`);
            } else if (difference >= 11 && difference <= 15) {
                alert(`Hmm… not too close, but not terrible either.`);
            } else {
                alert(`Way off! The number is hiding from you!`);
            }
        }
        console.log(`Your guesses: ${arr}`)
        alert(`😢 Game over, ${name}! The number was ${numberToGuess}. Better luck next time!`);

    } else {
        console.log("Invalid key!");
        alert("Enter a valid level!");
        return;
    }

}
