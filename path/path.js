const path = require('path');

console.log('Basename: ' + path.basename('D:\\Desenvolvimento\\WorkSpaces\\Node\\cursonode\\server.js'));
// Normalize Interpreta ..
console.log('Normalize: ' + path.normalize('D:\\Desenvolvimento\\WorkSpaces\\Node\\cursonode\\..\\..'));
console.log('Join: ' + path.join('/Desenvolvimento', '/WorkSpaces', '/Node' , '..'));
console.log('Resolve: ' + path.resolve('path.js'));
console.log('ExtName: ' + path.extname('path.js'));