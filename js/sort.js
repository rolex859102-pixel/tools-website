function sortText(){

let text = document.getElementById("textInput").value;

let sorted = text
.split("\n")
.sort()
.join("\n");

document.getElementById("result").innerHTML =
`<pre>${sorted}</pre>`;

}