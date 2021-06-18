const fs = require('fs').promises;

async function lerArquivo() {
    const dados = await fs.readFile('../arquivo.txt', 'binary');
    return new Buffer.from(dados);
}

try {
    lerArquivo().then(dados => console.log(dados.toString()));
} catch (error) {
    console.log(error);
}