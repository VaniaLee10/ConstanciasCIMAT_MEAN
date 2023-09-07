const mongoose = require('mongoose');
const { Schema } = mongoose;

const configuracionSchema = new Schema({
    'id': {type: Number, required: true},
    'logos': [{
        'llave': { type: String, required: true },
        'nombre': { type: String, required: true }
    }],
    'periodo_variable': { type: String },
    'presidenta': [{
        'nombre': { type: String },
        'cargo': { type: String },
        'periodo': { type: String },
    }],
    'creacion': { type: Date },
    'actualizacion': { type: Date }
});

module.exports = mongoose.model('configuracion', configuracionSchema);