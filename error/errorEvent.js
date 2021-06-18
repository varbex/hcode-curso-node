const {EventEmitter} = require('events');
const { type } = require('os');
class evento extends EventEmitter {};
const meuEvento = new evento();

const validaObjeto = (a) => {
    if (typeof a !== 'object') {
        meuEvento.emit('error', new Error('Deu erro'));
    } else {
        console.log('objeto valido')
    }
}

//Subscriber
meuEvento.addListener('error', (err) => {
    console.error(`Ocorreu o evento ${err}`);
});

//let dados = {nome: 'vitor arbex', profissao: 'analista'};
const dados = 1;
validaObjeto(dados);