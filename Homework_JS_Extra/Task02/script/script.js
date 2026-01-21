
let inputs = prompt("Enter numbers(separate by commas):")
let arr = inputs.split(",")

function countEvenNumbers(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (parseInt(numbers[i]) % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log("Count of even numbers:", countEvenNumbers(arr))