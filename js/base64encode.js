function encodeBase64(){

let text = document.getElementById("textInput").value;

let encoded = btoa(text);

document.getElementById("result").innerHTML =
`<p>${encoded}</p>`;

}