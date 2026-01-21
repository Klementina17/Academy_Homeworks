
let input = prompt("How many numbers will you enter?");
let inputs = prompt("Enter the numbers separated by commas:");
let arr = inputs.split(",");

function calculateAverage(number, numbersArray) {

    let result = 0;
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        sum += parseInt(numbersArray[i]);

    }
    result = sum / parseInt(number);

    return result;
}

console.log("The average is: " + calculateAverage(input, arr));