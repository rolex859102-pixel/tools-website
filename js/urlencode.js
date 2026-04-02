function encodeURL(){

let text = document.getElementById("textInput").value;

let encoded = encodeURIComponent(text);

document.getElementById("result").innerHTML =
`<p>${encoded}</p>`;

}