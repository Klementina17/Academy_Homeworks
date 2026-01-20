//Selectors
let fDiv = document.getElementsByTagName('div')[0];
console.log(fDiv)
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)
let lastDiv = document.getElementsByTagName('body')[0].lastElementChild.previousElementSibling
console.log(lastDiv)
let header3LDiv = lastDiv.querySelector('h3');
console.log(header3LDiv)
let header1LDiv = lastDiv.querySelector('h1');
console.log(header1LDiv)
let SecondDiv = document.getElementsByClassName('anotherDiv')[0]
let textFromFParagraphSecondDiv = SecondDiv.getElementsByTagName('p')[0].innerText
console.log(textFromFParagraphSecondDiv)
let textOfSecondDiv = SecondDiv.getElementsByTagName('text')[0]
let text = textOfSecondDiv.innerText += " text"
console.log(text)
let textOfLDiv = header1LDiv.innerText += " -  changed"
console.log(textOfLDiv)
let textofH3LDiv = header3LDiv.innerText += " - changed too"
console.log(textofH3LDiv)




