
function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`The Number  is ${i}: FizzBuzz`);
        }
        else if (i % 3 === 0) {
            console.log(`The Number  is ${i}: Fizz`);
        }
        else if (i % 5 === 0) {
            console.log(`The Number  is ${i}: Buzz`);
        }
        else {
            console.log(i);
        }
    }

}
fizzBuzz();