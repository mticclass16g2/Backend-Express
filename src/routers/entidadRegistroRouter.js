const expres = require('express');
const EntidadController = require('../controllers/entidadRegistroController');

class EntidadRouter{
    constructor(){
        this.router = expres.Router();
        this.comnfig();
    }
    comnfig(){
         //Crear el objeto de EstudianteController
         const objEntidadC = new EntidadController();
         //Creación de rutas / end points
         this.router.post('/registo/entidades', objEntidadC.crearEntidad);
         this.router.get('/registo/entidades', objEntidadC.obtenerEntidades);
         this.router.put('/registo/entidades', objEntidadC.editarEntidades);
         this.router.delete('/registo/entidades', objEntidadC.eliminarEntidades);
         this.router.get('/registo/entidadesId', objEntidadC.obtenerEntidadesId);
    }
}
module.exports = EntidadRouter;
