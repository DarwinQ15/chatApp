const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(()=> {
        console.log('autenticacion exitosa');
    })
    .catch((error)=> {
        console.log(error)
    })

db.sync({force: true})
    .then(()=> {
        console.log('base de datos sincronizada');
    })
    .then((error)=> console.log(error))

app.get('/', (req, res) => {
    console.log('bienvenido al server');
})

app.use(handleError);

module.exports = app;