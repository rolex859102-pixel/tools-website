function countParagraphs(){

let text = document.getElementById("textInput").value;

let paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== "").length;

document.getElementById("result").innerHTML =
`<p>Paragraphs: ${paragraphs}</p>`;

}