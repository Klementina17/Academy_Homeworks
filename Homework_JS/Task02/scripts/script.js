let names = ["Klementina", "Kirila", "Tadej", "Kalina", "Martin"]
let btn = document.getElementById('btn')
let ul = document.getElementsByTagName('ul')[0]

function fillList(ul, names) {

    for (let i = 0; i < names.length; i++) {
        let li = document.createElement('li');
        li.innerText = names[i];
        ul.appendChild(li)
    }
}

btn.addEventListener('click', function () {
    fillList(ul, names)
})