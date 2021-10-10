const expres = require('express');
const SuscripcionController = require('../controllers/suscripcionRegistroController');

class SuscripcionRouter{
    constructor(){
        this.router = expres.Router();
        this.comnfig();
    }
    comnfig(){
         //Crear el objeto de EstudianteController
         const objSuscripcionC = new SuscripcionController();
         //Creación de rutas / end points
         this.router.post('/registo/suscripciones', objSuscripcionC.crearSuscripcion);
         this.router.get('/registo/suscripciones', objSuscripcionC.obtenerSuscripciones);
         this.router.put('/registo/suscripciones', objSuscripcionC.editarSuscripcion);
         this.router.delete('/registo/suscripciones', objSuscripcionC.eliminarSuscripcion);
         this.router.get('/registo/suscripcionesId', objSuscripcionC.obtenerSuscripcionId);
         this.router.get('/registo/suscripcionesEmail', objSuscripcionC.obtenerSuscripcionEmail);
    }
}
module.exports = SuscripcionRouter;
