function countWords(){

let text = document.getElementById("textInput").value;

let words = text.trim().split(/\s+/).filter(word => word !== "").length;

let characters = text.length;

document.getElementById("result").innerHTML =
`<p>Words: ${words}</p>
<p>Characters: ${characters}</p>`;

}