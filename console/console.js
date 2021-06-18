
console.log('Console Log');
console.error(new Error('Erro na Aplicação'));

const carros = ['Audi','Gm','Chevrolet'];
console.table(carros);

const dados = {name:'vitor arbex', profissao:'Analista'};
console.table(dados);

console.count('processo');
console.count('processo');
console.count('processo');
console.count('processo');

console.countReset('processo');
console.log('teste');
console.count('processo');

console.time('processo2');
for (let index = 0; index < 100; index++) {
 //   console.log(' - '); 
}
console.timeEnd('processo2');

console.assert(true,'Log assert True');

console.assert(false,'Log assert false');

//console.clear();