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
        type: String
    },
    email:{
        type: String
    },
    loginPassword:{
        type: String
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