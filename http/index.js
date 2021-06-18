const http = require('http');
const fs = require('fs');
const enderecoIp  = '127.0.0.1';
const porta = 3000;
const url = `http://${enderecoIp}:${porta}`;
var conteudo = '';

fs.readFile('index.html', (err, dados) => {
    if (err) throw err
    conteudo = dados;
})

const serverHttp = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Conent-Type','text/html');
    res.end(conteudo);
});


serverHttp.listen(porta,enderecoIp, () => {
    console.log(`Rodando servidor http em: ${url} `);
});

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open' );

require('child_process').exec(open + ' ' + url);