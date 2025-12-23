
let input = prompt("Enter a number: ");
let number = parseInt(input);

if (Number.isNaN(number)) {
    alert("Invalid input. Please enter a number.");
}
else {
    if (number === 0) {
        alert("The number is " + number + "and even.");
    }

    else if (number > 0) {
        if (number % 2 === 0) {
            alert("The number is " + number + " and even.");
        }
        else {
            alert("The number is " + number + " and odd.");
        }
    }
    else {
        if (number % 2 === 0) {
            alert("The number " + number + " is negative and even.");
        } else {
            alert("The number " + number + " is negative and odd.");
        }
    }
}