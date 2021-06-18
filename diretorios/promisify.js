const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);

const conteudo = 'Criando um arquivo com promisify';

writeFile('teste.txt', conteudo)
.then(() =>{console.log('arquivo criado com sucesso')})
.catch((err) => {console.log(err)});
