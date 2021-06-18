
function soma(x) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            try {
                x = 5000 / x;
            throw true;
            resolve(x);
            } catch (error) {
                reject('droga');
            }
            
        }, 3000);
    })
}

function logaErro() {
    return (err) => {
        console.log(err);
    };
}

function escreveResultado() {
    return (resultado) => {
        console.log(resultado);
    };
}

soma('280').then(escreveResultado()).catch(logaErro());