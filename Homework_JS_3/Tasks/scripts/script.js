
let minutes = prompt("Enter minutes:");

function minutesToSeconds(minutes) {

    if (minutes === null) {
        return null;
    }

    let min = parseInt(minutes);

    if (Number.isNaN(min) || min < 0) {
        return null;
    }

    if (min === 0) {
        return 0;
    }

    return min * 60;

}
console.log(minutesToSeconds(minutes));


let hours1 = prompt("Enter hours:");
function hoursToMinutes(hours) {
    if (hours === null) {
        return null;
    }

    let parseHours = parseInt(hours);

    if (Number.isNaN(parseHours) || parseHours < 0) {
        return null;
    }

    if (parseHours === 0) {
        return 0;
    }

    return parseHours * 60;
}

console.log(hoursToMinutes(hours1));

let hours2 = prompt("Enter hours:");

function hoursToSecond(hours) {

    if (hours === null) {
        return null;
    }

    let parseHours = parseInt(hours);

    if (Number.isNaN(parseHours) || parseHours < 0) {
        return null;
    }

    if (parseHours === 0) {
        return 0;
    }

    return parseHours * 3600;


}

console.log(hoursToSecond(hours2));

let days1 = prompt("Enter days:");

function daysToHours(days) {

    if (days === null) {
        return null;
    }

    let parseDays = parseInt(days);

    if (Number.isNaN(parseDays) || parseDays < 0) {
        return null;
    }

    if (parseDays === 0) {
        return 0;
    }
    return parseDays * 24;
}

console.log(daysToHours(days1));


let days2 = prompt("Enter days:");

function daysToSeconds(days) {

    if (days === null) {
        return null;
    }

    let parseDays = parseInt(days);

    if (Number.isNaN(parseDays) || parseDays < 0) {
        return null;
    }

    if (parseDays === 0) {
        return 0;
    }

    return parseDays * 86400;
}
console.log(daysToSeconds(days2));


let value = prompt("Enter value:");


function isTruthyValue(value) {

    if (value === "" || value === null) {
        return false;
    }

    if (value.toLowerCase() === "false") {
        return false;
    }

    let parseValue = parseInt(value);

    if (parseValue === 0) {
        return false;
    }

    return true;
}

console.log(isTruthyValue(value));


let firstValue = prompt("Enter first value:");
let secondValue = prompt("Enter second value:");

function areBothTruthy(a, b) {
    let val1 = Number(a);
    let val2 = Number(b);

    if (a === null || a === "" || val1 === 0) return false;
    if (b === null || b === "" || val2 === 0) return false;

    return true;

}

console.log(areBothTruthy(firstValue, secondValue));


let str = prompt("Enter a string:");

function getStringLength(str) {

    if (str === null) return null;


    // str = str.trim();


    if (str === "") return 0;


    if (!isNaN(str)) return null;


    return str.length;
}

console.log(getStringLength(str));

let string1 = prompt("Enter string:");

function getFirstAndLastChar(string) {

    if (string === null) {
        return null;
    }
    if (typeof string !== "string") {
        return null;
    }
    if (string.length < 2) {
        return null;
    }

    return string[0] + string[string.length - 1];

}
console.log(getFirstAndLastChar(string1));

let string2 = prompt("Enter string:");

function capitalizeIfLong(text) {

    if (text === null) return null;

    if (text === "") {
        return null;
    }
    if (!isNaN(text)) {
        return null;
    }

    if (text.length < 5) {
        return text;
    }

    // if (text.length >= 5) {
    return text[0].toUpperCase() + text.slice(1);
    // }
}

console.log(capitalizeIfLong(string2));

let char = prompt("Enter character:");

function isVowel(char) {

    if (!isNaN(char) || char.length !== 1 || char === null || char === "") {
        return null;
    }

    if (char.toLowerCase() !== "a" && char.toLowerCase() !== "e" && char.toLowerCase() !== "i" && char.toLowerCase() !== "o" && char.toLowerCase() !== "u") {
        return false;
    }

    return true;
}

console.log(isVowel(char));

let firstNumber = prompt("Enter first number:");
let secondNumber = prompt("Enter second number:");

function getLargerNumber(a, b) {

    if (a === null || b === null || a === "" || b === "") {
        return null;
    }

    let num1 = parseInt(a);
    let num2 = parseInt(b);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return null;
    }

    if (num1 > num2) {
        return num1;
    }

    if (num2 > num1) {
        return num2;
    }
    return num1;
}
console.log(getLargerNumber(firstNumber, secondNumber));


let firstNum = prompt("Enter first number:");
let secondNum = prompt("Enter second number:");
let thirdNum = prompt("Enter third number:");

function getMiddleNumber(a, b, c) {

    if (a === null || b === null || c === null || a === "" || b === "" || c === "") {
        return null;
    }
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let num3 = parseInt(c);

    if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
        return null;
    }

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return null;
    }


    if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
        return num1;
    } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
        return num2;
    }
    return num3;

}

console.log(getMiddleNumber(firstNum, secondNum, thirdNum));


let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");

function formatFullName(firstName, lastName) {

    if (firstName === null || lastName === null || firstName === "" || lastName === "") {
        return null;
    }

    if (!isNaN(firstName) || !isNaN(lastName)) {
        return null;
    }
    return lastName + ", " + firstName;


}

console.log(formatFullName(firstName, lastName));

let userName = prompt("Enter user name:");

function isValidUsername(user) {
    if (user === null || user === "") {
        return false;
    }

    if (typeof user !== "string") {
        return false;
    }
    if (user.length < 5 || user.length > 12) {
        return false;
    }
    if (!isNaN(user[0])) {
        return false;
    }

    return true;
}
console.log(isValidUsername(userName));