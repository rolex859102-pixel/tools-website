function generateNumber(){

let min = document.getElementById("min").value;

let max = document.getElementById("max").value;

let random = Math.floor(Math.random() * (max - min + 1)) + Number(min);

document.getElementById("result").innerHTML =
`<p>${random}</p>`;

}