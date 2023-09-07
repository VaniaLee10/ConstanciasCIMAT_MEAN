const mongoose = require('mongoose');
const { Schema } = mongoose;

const interesesSchema = new Schema({
    'id': { type: Number, required: true },
    'id_usuario': { type: Number, required: true },
    'area': { type: String },
    'evento': { type: String },
    'colaboracion': { type: String },
    'motivo': { type: String },
    'creacion': { type: Date },
    'actualizacion': { type: Date }
});

module.exports = mongoose.model('Interes', interesesSchema);
