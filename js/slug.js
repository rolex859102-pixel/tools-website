function generateSlug(){

let text = document.getElementById("textInput").value;

let slug = text
.toLowerCase()
.trim()
.replace(/\s+/g,'-')
.replace(/[^\w\-]+/g,'');

document.getElementById("result").innerHTML =
`<p>${slug}</p>`;

}