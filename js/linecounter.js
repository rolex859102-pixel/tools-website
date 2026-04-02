function countLines(){

let text = document.getElementById("textInput").value;

let lines = text.split("\n").length;

document.getElementById("result").innerHTML =
`<p>Lines: ${lines}</p>`;

}