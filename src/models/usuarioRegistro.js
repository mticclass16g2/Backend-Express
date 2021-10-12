const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    doc_identidad:{
        type: String, required: [true, 'documento obligatorio..']
    },
    email:{
        type: String, required: [true, 'Correo obligatorio..']
    },
    loginPassword:{
        type: String, required: [true, 'Contraseña obligatoria..']
    },
    celular:{
        type: String
    },
    rol_id:{
        type: Number
    },
    ciudad:{
        type: Number
    },
    activo:{
        type: Number
    },
    

},{
    collection : 'usuarios'
});
module.exports = mongoose.model('Usuario', usuarioSchema);