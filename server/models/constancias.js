const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConstanciaSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    institucion: { type: String, required: true },
    constancia: { type: String, required: true }
});

module.exports = mongoose.model('Constancia', ConstanciaSchema);
