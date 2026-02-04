let divUl = document.getElementById('divUl')
let color = document.getElementById('color');
let fontSize = document.getElementById('fontSize');
let items = document.getElementById('items');

let btn = document.getElementById('btn');


function generateList(divUl, color, fontSize, items) {
    let ul = document.createElement('ul')
    let values = items.value;
    let splittedItems = values.split(',')

    for (let i = 0; i < splittedItems.length; i++) {
        let li = document.createElement('li')
        li.innerText = splittedItems[i];
        li.style.color = color.value;
        li.style.fontSize = fontSize.value;
        ul.appendChild(li)
    }

    divUl.appendChild(ul)

}

btn.addEventListener('click', function () {
    generateList(divUl, color, fontSize, items)
})