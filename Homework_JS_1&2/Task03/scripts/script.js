
let username = "Klementina";
let password = "qwerty123";

let inputUsername = prompt("Enter your username:");
let inputPassword = prompt("Enter your password:");

if (inputUsername === '' ||  inputPassword === '') {
    alert("Username and password cannot be empty.");
}
else if (username === inputUsername && password === inputPassword) {
    alert("Login successful!");
}
else {
    alert("Incorrect username or password.");
}

