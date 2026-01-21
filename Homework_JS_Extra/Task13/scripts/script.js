let input = prompt("Enter numbers separated by commas:");

let arr = input.split(",").map(Number);

function removeDuplicates(array) {
    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArr.includes(array[i])) {
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr;
}


console.log(removeDuplicates(arr));
