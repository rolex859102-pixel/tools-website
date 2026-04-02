function capitalizeWords(){

let text = document.getElementById("textInput").value;

let result = text
.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}