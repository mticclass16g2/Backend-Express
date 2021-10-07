const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    codigo:{
        type: String
    }
},  {
        collection: 'servicios'
});

module.exports = mongoose.model('Servicio', servicioSchema);
