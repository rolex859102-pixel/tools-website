function decodeURL(){

let text = document.getElementById("textInput").value;

let decoded = decodeURIComponent(text);

document.getElementById("result").innerHTML =
`<p>${decoded}</p>`;

}