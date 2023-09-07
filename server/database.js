const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/constancias';
const URI = 'mongodb+srv://axelfelix101101:AJHExkl1ZrWfr2sj@cluster0.hw9owrq.mongodb.net/Cimat_constancias';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;