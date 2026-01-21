
let number = prompt("Enter a number: ");

function isArmstrong(num) {
    let sum = 0;
    let digits = num.length;
    for (let i = 0; i < digits; i++) {
        sum += Math.pow(Number(num[i]), digits);
    }

    if (sum === Number(num)) {
        return "Armstrong";
    } else {
        return "Not Armstrong";
    }
}


console.log(isArmstrong(number));
