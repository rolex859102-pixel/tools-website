function repeatText(){

let text = document.getElementById("textInput").value;

let count = document.getElementById("repeatCount").value;

let result = "";

for(let i=0;i<count;i++){
result += text + " ";
}

document.getElementById("result").innerHTML =
`<p>${result}</p>`;

}