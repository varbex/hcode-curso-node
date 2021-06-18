const fs = require('fs');
const path = require('path')

fs.readdir(__dirname, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        console.log(`Filename: ${__dirname}${path.sep}${file}`);
    });

})