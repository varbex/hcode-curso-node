const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { error } = require('console');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    //res.json({message: 'Bem vindo'});
    res.sendFile(__dirname+'/index.html');
});

const storage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null,'uploads/')
    },
    filename: (req, arquivo, cb)=>{
        cb(null, arquivo.fieldname+'-'+Date.now()+path.extname(arquivo.originalname))
    }
})

const upload = multer({storage});

app.post('/upload', upload.single('arquivo'), (req, res, next)=> {
    const arquivo = req.file;
    if (!arquivo) {
        const err = new Error('selecione um arquivo');
        err.httpStatusCode = 400;
        return next(err);
    } else {
        res.send(arquivo);
    }
});

app.listen(3000, '127.0.0.1', ()=> {
    console.log(`Servidor iniciado na porta: 3000`)
});