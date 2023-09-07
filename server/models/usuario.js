const mongoose = require('mongoose');
const { Schema } = mongoose;

let usuarioShema = new Schema({
    'nombre' : { type : String , required: true},
    'apellido_paterno' : { type : String , required: true},
    'apellido_materno' : { type : String , required: true},
    'correo_personal' : { type : String , required: true},
    'correo_institucional' : { type : String , required: true},
    'descripcion_perfil' : { type : String , required: true},
    'observaciones': [{
        'observaciones': { type: String, required: true },
        'tiempo' : {type : Date, required: true},
    }],
    'miembroSMCC': { type: Boolean, required: true },
    'ocupacion': { type: String },
    'estado': { type: String },
    'institucion_trabajo': { type: String },
    'cambiar_perfil': { type: String },
    'membresia': [{
        'observaciones': { type: String, required: true },
        'tiempo' : {type : Date, required: true},
    }],
    'descripcion_membresia': { type: Boolean, required: true },
    'grado': { type: String },
    'creacion': { type: String },
    'actualizacion': { type: String },
});

module.exports = mongoose.model('usuario',usuarioShema); // coleccion , esquema