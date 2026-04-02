function removeDuplicate(){

let text = document.getElementById("textInput").value;

let words = text.split(" ");

let unique = [...new Set(words)];

let result = unique.join(" ");

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}