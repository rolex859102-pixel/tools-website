function countCharacters(){

let text = document.getElementById("textInput").value;

let characters = text.length;

document.getElementById("result").innerHTML =
`<p>Characters: ${characters}</p>`;

}