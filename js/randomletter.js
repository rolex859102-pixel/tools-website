function generateLetter(){

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let random = letters.charAt(
Math.floor(Math.random() * letters.length)
);

document.getElementById("result").innerHTML =
`<h2>${random}</h2>`;

}