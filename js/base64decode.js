function decodeBase64(){

let text = document.getElementById("textInput").value;

let decoded = atob(text);

document.getElementById("result").innerHTML =
`<p>${decoded}</p>`;

}