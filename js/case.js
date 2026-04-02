function toUpper(){

let text = document.getElementById("textInput").value;

document.getElementById("output").innerHTML =
text.toUpperCase();

}

function toLower(){

let text = document.getElementById("textInput").value;

document.getElementById("output").innerHTML =
text.toLowerCase();

}

function capitalize(){

let text = document.getElementById("textInput").value;

let result = text.charAt(0).toUpperCase() + text.slice(1);

document.getElementById("output").innerHTML =
result;

}