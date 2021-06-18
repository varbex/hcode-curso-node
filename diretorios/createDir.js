const fs = require('fs');
const pastas = ['css','images','js','lib'];

function make () {
    pastas.forEach((item) => {
        fs.mkdir(`teste1/${item}`,{recursive : true}, (err) => {
            if (err) throw err;
            console.log(`Diretorio criado ${item}`);
        });    
    })
};

make();