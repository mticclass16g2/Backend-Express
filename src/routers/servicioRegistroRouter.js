const expres = require('express');
const ServicioRegistroController = require('../controllers/servicioRegistroController');

class servicioRouter{
    constructor(){
        this.router = expres.Router();
        this.config();
    }

    config(){
        //Crear el objeto de EstudianteController
        const objServicioC = new ServicioRegistroController();
        //creaciond e ruta / end points
        this.router.post('/registroServicio', objServicioC.crearServicio);
        this.router.get('/registroServicio', objServicioC.obtenerSercivio);
        this.router.put('/registroServicio', objServicioC.actualizarServicio);
        this.router.delete('/registroServicio', objServicioC.eliminarServicio);

    }
}
module.exports = servicioRouter;