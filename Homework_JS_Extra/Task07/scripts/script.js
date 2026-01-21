
function sumUntilZero() {
    let input = Number(prompt("Enter a number (0 to stop):"));
    let sum = 0;

    while (input !== 0) {
        sum += input;
        input = Number(prompt("Enter a number (0 to stop):"));
    }
    return sum;
}

console.log("Total sum:", sumUntilZero());