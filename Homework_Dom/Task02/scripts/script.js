let paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
for (let p of paragraphs) {
    p.innerText = "Text Changed!";
}
console.log(paragraphs);

let headers = document.querySelectorAll("h1,h3");
for (let h of headers) {
    h.innerText = "Header Changed!";
}
console.log(headers);