const mongoose = require('mongoose');
const { Schema } = mongoose;

let usuarioShema = new Schema({
    'nombre' : { type : String },
    'apellido_paterno' : { type : String },
    'apellido_materno' : { type : String },
    'correo_personal' : { type : String },
    'correo_institucional' : { type : String },
    'descripcion_perfil' : { type : String },
    'observaciones': [{
        'observaciones': { type: String },
        'tiempo' : {type : Date},
    }],
    'miembroSMCC': { type: Boolean },
    'ocupacion': { type: String },
    'estado': { type: String },
    'institucion_trabajo': { type: String },
    'cambiar_perfil': { type: String },
    'membresia': [{
        'observaciones': { type: String },
        'tiempo' : {type : Date},
    }],
    'descripcion_membresia': { type: Boolean },
    'grado': { type: String },
    'creacion': { type: String },
    'actualizacion': { type: String },
});

module.exports = mongoose.model('usuario',usuarioShema); // coleccion , esquema