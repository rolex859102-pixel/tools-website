function generateMeta(){

let title = document.getElementById("title").value;
let desc = document.getElementById("description").value;
let keywords = document.getElementById("keywords").value;

let result = `
<meta name="title" content="${title}">
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
`;

document.getElementById("result").innerHTML =
`<pre>${result}</pre>`;

}