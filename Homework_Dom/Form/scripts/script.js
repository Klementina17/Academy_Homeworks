
let inputs = document.getElementById("userInputs").children;
let btn = document.getElementById("submit");
let ul = document.createElement('ul');
document.body.appendChild(ul);

let students = [];

function createObject(inputs) {
    let studentObject = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        age: inputs[2].value
    };

    students.push(studentObject);


    let li = document.createElement('li');
    li.innerText = `First Name: ${studentObject.firstName}, Last Name: ${studentObject.lastName}, Age: ${studentObject.age}`;
    ul.appendChild(li);

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";

    console.log(students);

}


btn.addEventListener("click", function () {

    createObject(inputs)
})