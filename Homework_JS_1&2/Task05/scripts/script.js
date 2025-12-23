
let input = prompt("Enter a score between 0  and 100: ");
let score = parseInt(input);

if (Number.isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid score between 0 and 100");
}
else {

    if (score >= 90 && score <= 100) {
        alert(`Your score is ${score} and your grade is A.`)
    }
    else if (score >= 80 && score <= 89) {
        alert(`Your score is ${score} and your grade is B.`)
    }
    else if (score >= 70 && score <= 79) {
        alert(`Your score is ${score} and your grade is C.`)
    }
    else if (score >= 60 && score <= 69) {
        alert(`Your score is ${score} and your grade is D.`)
    }
    else {
        alert(`Your score is ${score} and your grade is F.`)
    }
}