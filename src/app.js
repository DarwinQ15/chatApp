const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./modules/initModels');
const {routerUser, authRoute} = require('./routes');

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(()=> {
        console.log('autenticacion exitosa');
    })
    .catch((error)=> {
        console.log(error)
    })

db.sync({force: false})
    .then(()=> {
        console.log('base de datos sincronizada');
    })
    .then((error)=> console.log(error))

app.get('/', (req, res) => {
    console.log('bienvenido al server');
})

app.use('/api/v1', routerUser);
app.use('/api/v1', authRoute)

app.use(handleError);

module.exports = app;