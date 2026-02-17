let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let apiData = (url) => {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let averageGradeHigherThan3 = studentsWithAverageGradeHigherThan3(data)
            console.log(averageGradeHigherThan3)

            let femaleStudents = femaleStudentsWithAverageGradeHigherThan5(data)
            console.log(femaleStudents)

            let fullName = maleStudentsHowLiveInSkopjeWithAgeOver18(data)
            console.log(fullName)

            let averageGrade = averageGradesOfFemaleStudentsWhichAgeIsOver24(data)
            console.log(averageGrade)

            let maleStudent = maleStudentWhichNameStartsWithBandAverageGradeOver2(data)
            console.log(maleStudent)
        })
        .catch(error => console.log(error.message))
}

apiData(url)

function studentsWithAverageGradeHigherThan3(data) {
    let students = data.filter(student => student.averageGrade > 3)
    return students;
}

function femaleStudentsWithAverageGradeHigherThan5(data) {
    let femaleStudents = data.filter(student => student.gender === "Female" && student.averageGrade === 5)
        .map(femaleName => femaleName.firstName)
    return femaleStudents;
}

function maleStudentsHowLiveInSkopjeWithAgeOver18(data) {
    let maleStudents = data.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
        .map(maleStudent => maleStudent.firstName + " " + maleStudent.lastName)
    return maleStudents;
}

function averageGradesOfFemaleStudentsWhichAgeIsOver24(data) {
    let averageGrade = data.filter(student => student.gender === "Female" && student.age > 24)
        .map(femaleStudent => femaleStudent.averageGrade)
    return averageGrade;

}

function maleStudentWhichNameStartsWithBandAverageGradeOver2(data) {
    let maleStudents = data.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2)
    return maleStudents;
}