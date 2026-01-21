let inputs = prompt("Enter numbers separated by commas:");
let arr = inputs.split(",")

function findSmallest(numbers) {
    let smallest = parseInt(numbers[0]);

    for (let number of numbers) {
        if (smallest > parseInt(number)) {
            smallest = parseInt(number);
        }
    }
    return smallest
}

console.log("The smallest number is: " + findSmallest(arr));
