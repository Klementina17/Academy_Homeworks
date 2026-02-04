let input = document.getElementById('movieInput')
let searchBtn = document.getElementById('searchBtn')
let h1 = document.getElementById('text')

let movies = [
    "Crazy Rich Asians",
    "The Proposal",
    "10 Things I Hate About You",
    "Notting Hill",
    "Love Actually"
];


function searchMovie(input, movies, h1) {

    let inputValue = input.value.toLowerCase();
    console.log(inputValue)

    for (let i = 0; i < movies.length; i++) {
        if (inputValue === movies[i].toLowerCase()) {
            h1.innerText = `The movie can be rented.`;
            h1.style.color = 'green';
            return;
        }
    }
    h1.innerText = ` The movie can't be rented`;
    h1.style.color = 'red';

}

searchBtn.addEventListener('click', function () {

    searchMovie(input, movies, h1)
})

