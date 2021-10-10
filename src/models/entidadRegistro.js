const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entidadSchema = new Schema({
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
    }
},{
    collection: 'entidades'
});

module.exports = mongoose.model('Entidad', entidadSchema);