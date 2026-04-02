function convertUpper(){

let text = document.getElementById("textInput").value;

let result = text.toUpperCase();

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}