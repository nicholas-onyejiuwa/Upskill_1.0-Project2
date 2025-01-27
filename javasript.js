let i = 10;
let a = i;
let b = i++;
let c = ++i;

document.getElementById("script").innerHTML =
`the value of b = ` +b;
document.getElementById("script2").innerHTML =
`the value of c = ` +c;