const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5) +" Antes do arquivo");

const dados = fs.readFileSync("arquivo.txt");

console.log((process.hrtime()[0]/60).toFixed(5) + " Depois do arquivo");