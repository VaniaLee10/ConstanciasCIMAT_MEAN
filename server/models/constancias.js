const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConstanciaSchema = new Schema({
    'id': { type: String, required: true },
    'id_usuario': { type: String, required: true },
    'periodo_año': { type: Date, required: true },
    'status': { type: String, required: true },
    'id_configuracion': { type: String, required: true },
    'creacion': { type: Date, required: true },
    'actualizacion': { type: Date, required: true },
});

module.exports = mongoose.model('constancia', ConstanciaSchema);
