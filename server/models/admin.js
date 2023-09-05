const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const adminShema = new Schema({
    'user' : { type : String , required: true},
    'pass' : { type : String , required: true},
});

/** encriptar contraseñas */
adminShema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = mongoose.model('admin',adminShema); // coleccion , esquema