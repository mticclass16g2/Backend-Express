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
        type: Number
    },
    email:{
        type: String
    },
    loginPassword:{
        type: String
    },
    celular:{
        type: Number
    },
    rol_id:{
        type: String
    },
    ciudad:{
        type: String
    },
    activo:{
        type: Number
    },
    

},{
    collection : 'usuarios'
});
module.exports = mongoose.model('Usuario', usuarioSchema);