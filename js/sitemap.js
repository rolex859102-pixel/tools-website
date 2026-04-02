function generateSitemap(){

let urls = document.getElementById("urls").value.split("\n");

let sitemap = "<urlset>\n";

urls.forEach(url => {
if(url.trim() !== ""){
sitemap += "  <url>\n";
sitemap += "    <loc>" + url + "</loc>\n";
sitemap += "  </url>\n";
}
});

sitemap += "</urlset>";

document.getElementById("result").innerHTML =
`<pre>${sitemap}</pre>`;

}