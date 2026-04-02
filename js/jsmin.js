function minifyJS(){

let js = document.getElementById("jsInput").value;

let minified = js
.replace(/\n/g,"")
.replace(/\s+/g," ")
.replace(/\s*{\s*/g,"{")
.replace(/\s*}\s*/g,"}")
.replace(/\s*;\s*/g,";")
.replace(/\s*=\s*/g,"=")
.replace(/\s*\(\s*/g,"(")
.replace(/\s*\)\s*/g,")")
.trim();

document.getElementById("result").innerHTML =
`<pre>${minified}</pre>`;

}