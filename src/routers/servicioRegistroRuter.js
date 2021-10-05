const express = require('express');
const ServicioRegistroController = require('../controllers/servicioRegistroController');


class ServicioRegistroRouter{
        constructor(){
        this.router = express.Router();
        this.config();
    }
    config(){
        //CREAR EL OBJETO SERVICIOREGISTROCONTROLLER
        const NServicioRegistroC = new ServicioRegistroController();
        //CREACION DE RUTAS // END POINTS
        this.router.post('/servicio', NServicioRegistroC.registrarServicios);
        this.router.get('/servicio', NServicioRegistroC.obtenerServicioId);
        this.router.put('/servicio', NServicioRegistroC.actualizarServicio);
        this.router.delete('/servicio', NServicioRegistroC.eliminarServicio);
        this.router.get('/servicio', NServicioRegistroC.obtenerServicios);
        this.router.get('/servicio', NServicioRegistroC.obtenerServicioName);

    }
}

module.exports = ServicioRegistroRouter;