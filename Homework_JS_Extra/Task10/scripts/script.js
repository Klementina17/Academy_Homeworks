let words = prompt("Enter words separeted by commas :");
let arr = words.split(",");

function longestString(words) {

    let largest = words[0];
    for (let word of words) {
        if (largest.length < word.length) {
            largest = word;
        }
    }
    return largest;
}

console.log(longestString(arr))
