function generatePassword(){

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password = "";

for(let i=0;i<10;i++){

password += chars.charAt(
Math.floor(Math.random() * chars.length)
);

}

document.getElementById("result").innerHTML =
`<p>${password}</p>`;

}