
let input = prompt("Enter calculations separated by commas (e.g., 2 + 3, 4 * 5):");


let calculations = input.split(",");

function calculatorWithHistory(calculationsArray) {
    let results = [];

    for (let i = 0; i < calculationsArray.length; i++) {
        let parts = calculationsArray[i].trim().split(" ");

        let num1 = Number(parts[0]);
        let operator = parts[1];
        let num2 = Number(parts[2]);

        let result;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        } else {
            result = "Invalid operator";
        }

        results.push(result);
    }

    return results;
}

console.log(calculatorWithHistory(calculations));
