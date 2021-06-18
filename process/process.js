require('./subdir/subdir');

const process = require('process');
console.log(`------------------- process.js ----------------------`);
console.log(`Nome: ${__filename}`);
console.log(`Diretório do Arquivo: ${__dirname}`);
console.log(`Diretorio da Execução: ${process.cwd()}`);
console.log(`Usuário: ${process.env.username}`);
console.log(`SO: ${process.env.OS}`);
console.log(`Idioma: ${process.env.lang}`);
console.log(`Parametros de Execução: ${process.argv}`);
console.log(`--------------------------------------------`);
console.log(`Ambiente do Servidor: ${process.platform}`);


switch (process.argv[2]) {
    case '-a' :
        console.log('Parametro A');
        break;
    case '-b' :
        console.log('Parametro B');
        break;
    default:
        break;
}

