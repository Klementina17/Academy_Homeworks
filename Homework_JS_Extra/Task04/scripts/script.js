let input = prompt("Enter numbers:");
let arr = input.split(",").map(Number);

function reverseArray(arr) {
    let reverseArr = [...arr].reverse();
    return reverseArr;
}

console.log(reverseArray(arr));