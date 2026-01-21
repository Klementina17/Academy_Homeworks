let inputs = prompt("Enter  numbers:");
let arr = inputs.split(",");

function sumPositiveNumbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (parseInt(num) > 0) {
            sum += parseInt(num);
        }
    }

    return sum;

}

console.log("Sum of positive numbers:", sumPositiveNumbers(arr));