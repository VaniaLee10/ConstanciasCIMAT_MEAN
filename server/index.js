const express = require('express');
const morgan = require('morgan');
const app = express();

// Database
//const { mongoose } = require('./database'); //errores

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/constancias',require('./routes/constancias.routes'));

// Static Files
// Motor de plantillas
app.use(express.static('C:\\Users\\Eduardo\\OneDrive\\Documentos\\CIMAT\\MirnaConstancias\\ConstanciasCIMAT\\frontend\\static'))

app.set('view engine', 'ejs');
app.set('views', 'C:\\Users\\Eduardo\\OneDrive\\Documentos\\CIMAT\\MirnaConstancias\\ConstanciasCIMAT\\frontend\\views');
app.get('/tabla', (req, res) => {
    res.render('tabla.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});