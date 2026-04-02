function checkDensity(){

let text = document.getElementById("textInput").value.toLowerCase();
let keyword = document.getElementById("keyword").value.toLowerCase();

let words = text.split(/\s+/);

let totalWords = words.length;

let count = words.filter(word => word === keyword).length;

let density = ((count / totalWords) * 100).toFixed(2);

document.getElementById("result").innerHTML =
`<p>Keyword Count: ${count}</p>
<p>Total Words: ${totalWords}</p>
<p>Density: ${density}%</p>`;

}