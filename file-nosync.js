const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5) +" Antes do arquivo");

const dados = fs.readFile("arquivo.txt", (err,data) => {
    if (err) throw err;
    console.log((process.hrtime()[0]/60).toFixed(5) +" Terminei de ler o arquivo");
});

console.log((process.hrtime()[0]/60).toFixed(5) + " Depois do arquivo");