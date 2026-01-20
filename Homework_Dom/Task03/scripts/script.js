let arr = [1, 2, 3, 4, 5, 6, 7];

let ul = document.createElement('ul');
document.body.appendChild(ul);
let h3 = document.createElement('h3');
document.body.appendChild(h3);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    ul.appendChild(li);
    sum += arr[i];

}

let calc = arr.join(" + ");

h3.innerText = `Sum of array elements: ${calc} = ${sum}`;


