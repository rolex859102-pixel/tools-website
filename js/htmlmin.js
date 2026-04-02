function minifyHTML(){

let html = document.getElementById("htmlInput").value;

let minified = html
.replace(/\n/g,"")
.replace(/\s+/g," ")
.replace(/>\s+</g,"><")
.trim();

document.getElementById("result").innerHTML =
`<pre>${minified}</pre>`;

}