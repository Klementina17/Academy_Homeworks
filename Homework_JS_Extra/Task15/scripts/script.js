
let number = prompt("Enter a number: ");


function isPalindrome(num) {
    let reversed = num.split("").reverse().join("");
    if (num === reversed) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}


console.log(isPalindrome(number));
