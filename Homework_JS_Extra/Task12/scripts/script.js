let num = Number(prompt("Enter a number:"));

function isPrime(number) {
    if (number < 2) {
        return "Not Prime";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}

console.log(isPrime(num));
