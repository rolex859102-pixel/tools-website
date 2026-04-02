function countCharacters(){

let text = document.getElementById("textInput").value;

let characters = text.length;

let withoutSpaces = text.replace(/\s/g,'').length;

document.getElementById("result").innerHTML =
`
<p>Characters: ${characters}</p>
<p>Characters (without spaces): ${withoutSpaces}</p>
`;

}