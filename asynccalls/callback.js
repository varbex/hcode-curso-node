
function soma(x, callback) {
    return setTimeout(() => {
        x+= 5000;
        return callback(null, x);
    }, 3000);
}

function escreve (err,resultado) {
    if (err) throw err;
    console.log(resultado);
}

soma(200, escreve);

