const {EventEmitter} = require('events');
const { exit } = require('process');

class evento extends EventEmitter {};

const meuEvento = new evento();
//Subscriber
meuEvento.on('seguranca', (x,y) => {
    console.log(`Executando o evento ${x} ${y}`);
});

//Emitter
meuEvento.emit('seguranca','usuario', 'alterou o salario');

//Subscriber
meuEvento.on('encerrar', () => {
    console.log(`Encerrando o processo`);
    exit();
});

//Emitter
meuEvento.emit('encerrar');
