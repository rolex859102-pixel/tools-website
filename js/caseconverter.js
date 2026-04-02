function toUpper(){

let text = document.getElementById("textInput").value;

document.getElementById("result").innerText = text.toUpperCase();

}

function toLower(){

let text = document.getElementById("textInput").value;

document.getElementById("result").innerText = text.toLowerCase();

}

function toTitle(){

let text = document.getElementById("textInput").value;

let title = text.replace(/\w\S*/g,function(word){
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

document.getElementById("result").innerText = title;

}