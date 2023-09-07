const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentosSchema = new Schema({
    'id': { type: Number, required: true },
    'id_usuario': { type: Number, required: true },
    'observaciones': { type: String },
    'tipo': { type: String },
    'archivo': [{
        'url': { type: String, required: true },
        'nombre': { type: String, required: true },
        'fecha': { type: Date, required: true },
    }],
    'creacion': { type: Date },
    'actualizacion': { type: Date }
});

module.exports = mongoose.model('documento', documentosSchema);