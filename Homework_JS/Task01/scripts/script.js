
function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} from the ${this.academy} academy!`
    }

    this.getGradesAverage = function () {
        let sum = 0;
        let average = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        average = sum / this.grades.length

        return `The average of Grades is ${average}`;
    }
}

let studentOne = new Student("Klementina", "Dimitrova", 1999, "Avenga", [6, 7, 8, 10, 7])
console.log(studentOne.getAge())
console.log(studentOne.getInfo())
console.log(studentOne.getGradesAverage())

let students = [
    new Student("Klementina", "Dimitrova", 1999, "Avenga", [6, 7, 8, 10, 7]),
    new Student("Kirila", "Dimitrova", 2003, "Code", [9, 8, 10, 9]),
    new Student("Tadej", "Markovski", 1998, "Design", [7, 6, 8, 7])
];

console.log(students[1].getAge());
console.log(students[1].getInfo());
console.log(students[1].getGradesAverage());


