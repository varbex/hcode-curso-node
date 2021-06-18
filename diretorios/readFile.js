const fs = require('fs');

fs.readFile('readDir.js', (err, dados) => {
    if (err) throw err
    console.log(dados.toString());
})