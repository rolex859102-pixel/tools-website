function minifyCSS(){

let css = document.getElementById("cssInput").value;

let minified = css
.replace(/\n/g,"")
.replace(/\s+/g," ")
.replace(/\s*{\s*/g,"{")
.replace(/\s*}\s*/g,"}")
.replace(/\s*;\s*/g,";")
.replace(/\s*:\s*/g,":")
.trim();

document.getElementById("result").innerHTML =
`<pre>${minified}</pre>`;

}