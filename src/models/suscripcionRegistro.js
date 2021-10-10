const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suscripcionSchema = new Schema({
    persona_id:{
        type: String
    },
    companiNombre:{
        type: String
    },
    companiaLogo:{
        type:  String
    },
    servicio_id:{
        type: Number
    },
    ciudad_id:{
        type: Number
    },
    urlServicio:{
        type: String
    },
    descripcionServicio:{
        type: String
    },
    urlFacebook:{
        type: String
    },
    urlInstagram:{
        type: String
    },
    nombre:{
        type: String
    },
    categoria:{
        type: String
    }
},{
    collection: 'suscripciones'
});

module.exports = mongoose.model('Suscripcion', suscripcionSchema);