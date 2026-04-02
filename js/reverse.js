function reverseText(){

let text = document.getElementById("textInput").value;

let reversed = text.split("").reverse().join("");

document.getElementById("result").innerHTML =
`<p>${reversed}</p>`;

}