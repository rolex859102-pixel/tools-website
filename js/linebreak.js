function removeBreaks(){

let text = document.getElementById("textInput").value;

let result = text.replace(/\n/g," ");

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}