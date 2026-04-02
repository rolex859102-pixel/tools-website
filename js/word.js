function countWords(){

let text = document.getElementById("textInput").value;

let words = text.trim().split(/\s+/).length;

let characters = text.length;

let sentences = text.split(/[.!?]+/).length - 1;

document.getElementById("result").innerHTML =
`
<p>Words: ${words}</p>
<p>Characters: ${characters}</p>
<p>Sentences: ${sentences}</p>
`;

}