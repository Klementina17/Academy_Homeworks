
let form = document.getElementById('studentForm');
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let age = document.getElementById('age')
let email = document.getElementById('email')
let btn = document.getElementById('submit')
let database = [];

function createStudent(firstName, lastName, age, email) {
    let student = new Student(firstName.value, lastName.value, age.value, email.value)
    database.push(student)
    console.log(database)
    form.reset();
}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    createStudent(firstName, lastName, age, email)

})

