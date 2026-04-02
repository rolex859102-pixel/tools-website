function convertLower(){

let text = document.getElementById("textInput").value;

let result = text.toLowerCase();

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}