
let name = prompt("Enter the name of recipe:");
let countOfIngredients = prompt("How many ingredients do we need for the");
let nameofAllIngredients = prompt("Enter the name of every ingredient seprate with ',' :");

let ingredients = nameofAllIngredients.split(",")
console.log(ingredients)

let body = document.querySelector('body')
let h1 = document.createElement('h1')
h1.innerText = name
body.appendChild(h1)
let h2 = document.createElement('h2')
h2.innerText = `We need ${countOfIngredients} ingredients for this recipe.`
body.appendChild(h2)
let ul = document.createElement('ul')
for (let i = 0; i < ingredients.length; i++) {
    let li = document.createElement('li')
    li.innerText = ingredients[i]
    ul.appendChild(li)
}
body.appendChild(ul)