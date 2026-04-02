function generateRobots(){

let sitemap = document.getElementById("sitemap").value;

let result = `User-agent: *
Allow: /

Sitemap: ${sitemap}`;

document.getElementById("result").innerHTML =
`<pre>${result}</pre>`;

}