const {writeFile} = require('fs');

function criaArquivo (nome, conteudo) {
    return new Promise((response, reject) => {
        writeFile(nome, conteudo, err => {
            if (err) return reject();
            response();
        })
    });
}

criaArquivo('promisseArquivo.txt', 321).then(() => console.log('arquivo criado com sucesso')).catch(() => console.log('erro na criacao do arquivo'));