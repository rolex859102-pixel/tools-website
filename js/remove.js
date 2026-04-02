function removeSpaces(){

let text = document.getElementById("textInput").value;

let cleaned = text.replace(/\s+/g,' ').trim();

document.getElementById("result").innerHTML =
`<p>${cleaned}</p>`;

}