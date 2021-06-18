import EventEmitter from 'events';
import process from 'process';

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
    process.exit();
});

//Emitter
meuEvento.emit('encerrar');
