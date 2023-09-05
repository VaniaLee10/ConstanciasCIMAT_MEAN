const herramientas = {};
const bcrypt = require('bcrypt-nodejs');

herramientas.validatePassword = (passComparar, passUser) => {
	try{
		return bcrypt.compareSync(passComparar, passUser);
	} catch (error) {
		return false;
	}
}

herramientas.generateHash = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = herramientas;