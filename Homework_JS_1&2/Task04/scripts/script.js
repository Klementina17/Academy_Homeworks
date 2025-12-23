let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /):");

let number1 = parseInt(num1);
let number2 = parseInt(num2);

if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    if (operation === "+") {
        let sum = number1 + number2;
        alert(number1 + " + " + number2 + " = " + sum);
    }
    else if (operation === "-") {
        let diff = number1 - number2;
        alert(number1 + " - " + number2 + " = " + diff);
    }
    else if (operation === "*") {
        let mult = number1 * number2;
        alert(number1 + " * " + number2 + " = " + mult);
    }
    else if (operation === "/") {
        if (number2 === 0) {
            alert("Division by zero is not allowed.");
        } else {
            let div = number1 / number2;
            alert(number1 + " / " + number2 + " = " + div);
        }
    }
    else {
        alert("Invalid operation selected.");
    }
} else {
    alert("Enter valid numbers.");
}
