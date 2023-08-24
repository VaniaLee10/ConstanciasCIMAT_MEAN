const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Database
const { mongoose } = require('./database'); //errores

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static Files
// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static( path.join(__dirname, '/views/static')));

// Routes
app.use('/constancias',require('./routes/constancias.routes'));
app.use('/admin',require('./routes/admin.routes'));
app.use('/',require('./routes/external.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});