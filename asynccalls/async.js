
function soma(x) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            x+= 5000;
            resolve(x);
        }, 3000);
    })
}

async function principal() {
    try {
        const resultado = await soma(270); 
        console.log(resultado);       
    } catch (error) {
        console.log(error);
    }
}

principal();