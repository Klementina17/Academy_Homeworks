let container = $('.container')

function showPersonInfo(data) {
    $('.container').html("")

    let table = `<table class="table" border="3px" style="width:35%;
     text-align:center; 
     font-family: Arial, sans-serif;">
    <thead><tr>
    <th>Name</th>
    <th>Height</th>
    <th>Weight</th>
    <th>Eye Color</th>
    <th>Hair Color</th>
    </tr>
    <tr>
    <td>${data.name}</td>
     <td>${data.height}</td>
      <td>${data.mass}</td>
       <td>${data.eye_color}</td>
       <td>${data.hair_color}</td>
    </tr>
    </thead></table>`

    $('.container').html(table)
}

$('#btn').on('click', function () {

    $.ajax({
        url: 'https://swapi.dev/api/people/1',
        success: function (response) {
            showPersonInfo(response)

        },
        error: function (error) {
            console.log(error.responseText)
        }
    })
})

