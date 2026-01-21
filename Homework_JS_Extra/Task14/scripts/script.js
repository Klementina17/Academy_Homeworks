let number = prompt("Enter the number: ");
let arr = number.split('')

function sumOfDigits(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i])
    }
    return sum;
}

console.log(sumOfDigits(arr))