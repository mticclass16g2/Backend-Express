const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    correo_electronico:{
        type: String
    },
    contraseña:{
        type: String
    },
    id_tipodocumento:{
        type: Number
    },
    doc_identidad:{
        type: Number
    },
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    telefono:{
        type: String
    },
    ciudad:{
        type: String
    },
    rol:{
        type: String
    }

},{
    collection : 'usuarios'
});
module.exports = mongoose.model('Usuario', usuarioSchema);