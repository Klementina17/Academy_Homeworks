
let number = prompt("Enter a number: ");

function reverseNumber(number) {

    let reversed = number.split("").reverse().join("")
    return Number(reversed);
}

console.log(reverseNumber(number));