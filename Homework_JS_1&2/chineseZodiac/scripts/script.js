
let input = prompt("Enter your birth year:");
let parseInput = Number(input)

console.log(parseInput, typeof parseInput)

if (!Number.isInteger(parseInput)) {
    alert("Invalid input.Please enter a valid year.")
}
else {
    if ((parseInput - 4) % 12 === 0) {
        alert("Your Chinese Zodiac sing is Rat.")
    }
    else if ((parseInput - 4) % 12 === 1) {
        alert("Your Chinese Zodiac sign is Ox.")
    }
    else if ((parseInput - 4) % 12 === 2) {
        alert("Your Chinese Zodiac sign is Tiger.")
    }
    else if ((parseInput - 4) % 12 === 3) {
        alert("Your Chinese Zodiac sign is Rabbit.")
    }
    else if ((parseInput - 4) % 12 === 4) {
        alert("Your Chinese Zodiac sign is Dragon.")
    }
    else if ((parseInput - 4) % 12 === 5) {
        alert("Your Chinese Zodiac sign is Snake.")
    }
    else if ((parseInput - 4) % 12 === 6) {
        alert("Your Chinese Zodiac sign is Horse.")
    }
    else if ((parseInput - 4) % 12 === 7) {
        alert("Your Chinese Zodiac sign is Goat.")
    }
    else if ((parseInput - 4) % 12 === 8) {
        alert("Your Chinese Zodiac sign is Monkey.")
    }
    else if ((parseInput - 4) % 12 === 9) {
        alert("Your Chinese Zodiac sign is Rooster.")
    }
    else if ((parseInput - 4) % 12 === 10) {
        alert("Your Chinese Zodiac sign is Dog.")
    }
    else if ((parseInput - 4) % 12 === 11) {
        alert("Your Chinese Zodiac sign is Pig.")
    }
    else {
        alert("Error calculating zodiac sign.")
    }
}