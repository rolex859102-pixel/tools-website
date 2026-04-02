function generateText(){

let text = document.getElementById("inputText").value;

let output = `
<p>𝓕𝓪𝓷𝓬𝔂: ${text}</p>
<p>𝐁𝐨𝐥𝐝: ${text}</p>
<p>𝖌𝖔𝖙𝖍𝖎𝖈: ${text}</p>
<p>🅑🅞🅧: ${text}</p>
<p>ʟᴏᴡᴇʀ: ${text}</p>
`;

document.getElementById("result").innerHTML = output;

}