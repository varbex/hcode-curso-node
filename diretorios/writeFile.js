const {writeFile} = require('fs');

writeFile('teste.txt','texto interno' , (err) => {
    console.log('arquivo criado')
})
console.log(writeFile);