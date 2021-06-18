const child_process = require('child_process');

const ls = child_process.spawn('dir',['..'], {shell: true});

ls.stdout.on('data', (data) => {
    console.log(data.toString());
})

ls.stderr.on('error', (err) => {
    console.error(err);
})

ls.stdout.on('close', (data) => {
    console.log(`Finalizado com codigo: ${data}`);
})
