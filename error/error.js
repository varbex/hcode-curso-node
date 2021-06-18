function execute() {
    executeTo();
}

function executeTo(params) {
    throw new Error('Deu erro!');
}

function init() {
    try {
        execute()
    } catch (e) {
        console.log(e);
    }
}

init();

console.log('depois do erro');

