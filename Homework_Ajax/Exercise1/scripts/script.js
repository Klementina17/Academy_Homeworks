
let container = $('.container');

function showStudentsInfo(data) {
    container.innerHTML = "";
    let ul = document.createElement('ul');
    let h1 = document.createElement('h1')
    h1.innerText = data.academy;
    let students = data.students;

    for (const student of students) {
        let li = document.createElement('li');
        li.innerText = student;
        ul.appendChild(li)
    }

    container.append(h1, ul)
}

$('#btnStudent').on("click", function () {

    $.ajax({
        url: 'https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G2/Class03%20-%20AJAX/students.json',
        success: function (response) {
            let result = JSON.parse(response)
            showStudentsInfo(result)
        },
        error: function (error) {
            console.log('The request failed!');
            console.log(error.responseText)
        }
    })
})






