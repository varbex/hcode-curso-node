console.log('Caregado modulo01');

const oculta = ()=> {
    console.log('executando funcção oculta');
}

const publica = ()=> {
    console.log('executando função publica');
    oculta();
}

const welcome = 'Bem Vindo';

module.exports = {publica, welcome};