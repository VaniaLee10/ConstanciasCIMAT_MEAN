const mongoose = require('mongoose');
const { Schema } = mongoose;

let adminShema = new Schema({
    'user' : { type : String , required: true},
    'pass' : { type : String , required: true},
});

module.exports = mongoose.model('admin',adminShema); // coleccion , esquema