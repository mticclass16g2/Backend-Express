const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    id_tiposervicio:{
        type: Number
    },
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    activo:{
        type: Boolean
    }

},{
    collection : 'servicios'
});

module.exports = mongoose.model('Servicio', servicioSchema);