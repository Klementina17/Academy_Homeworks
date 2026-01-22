
let arr = ['rock', 'paper', 'scissors'];
let playAgain = true;

while (playAgain) {

    let playerName = prompt("Enter your name: ");
    alert(`Welcome ${playerName}! Get ready for Rock–Paper–Scissors!`);
    let totalRounds;

    while (true) {
        let rounds = prompt("How many rounds want to play?");
        totalRounds = parseInt(rounds);
        if (!isNaN(totalRounds) && totalRounds > 0) break;
        alert("Please enter a valid positive number.");
    }

    rockPaperScissorsGame(totalRounds, playerName)

    let again = prompt("Do you want to play again?(yes/no)").toLowerCase();

    if (again !== "yes") {
        playAgain = false;
        alert("Thanks for playing! Goodbye!");
    }
}

function rockPaperScissorsGame(totalRounds, playerName) {

    let scoreOfPlayer = 0;
    let scoreOfComputer = 0;
    let arrayOfWinning = [];


    for (let i = 0; i < totalRounds; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomChoice = arr[randomIndex];

        let yourChoice;

        while (true) {
            yourChoice = prompt("What you choose rock, paper or scissors?").toLowerCase();
            if (arr.includes(yourChoice)) {
                break;
            }
            alert("Invalid choice! Please type rock, paper, or scissors.");
        }

        if (yourChoice === randomChoice) {
            alert("It’s a tie! Try again!");
            alert(`${playerName} ${scoreOfPlayer} - Computer ${scoreOfComputer}`)
            arrayOfWinning.push(`Round ${i + 1}: Tie.`)
        }
        else {
            alert(`Computer chose ${randomChoice}`);
            if (
                (yourChoice === "rock" && randomChoice === "scissors") ||
                (yourChoice === "paper" && randomChoice === "rock") ||
                (yourChoice === "scissors" && randomChoice === "paper")
            ) {
                alert(`You win this round! Nice one, ${playerName}!`);
                scoreOfPlayer++;
                arrayOfWinning.push(`Round ${i + 1}: ${playerName} won.`)
                alert(`${playerName} ${scoreOfPlayer} - Computer ${scoreOfComputer}`)

            }
            else {
                alert(`Computer takes this round! Don’t give up!`);
                scoreOfComputer++;
                arrayOfWinning.push(`Round ${i + 1}: Computer won.`)
                alert(`${playerName} ${scoreOfPlayer} - Computer ${scoreOfComputer}`)
            }
        }
    }

    if (scoreOfComputer === scoreOfPlayer) {
        alert(`It's a tie tournament! Both scored ${scoreOfPlayer}.`);
        alert("Summary:\n" + arrayOfWinning.join("\n"));
    }
    else if (scoreOfComputer > scoreOfPlayer) {
        alert(`Game over! The computer won ${scoreOfComputer} - ${scoreOfPlayer}.`)
        alert("Summary:\n" + arrayOfWinning.join("\n"));
    }
    else {
        alert(`Congratulations ${playerName}! You won the tournament ${scoreOfPlayer} - ${scoreOfComputer}!`)
        alert("Summary:\n" + arrayOfWinning.join("\n"));
    }

}
