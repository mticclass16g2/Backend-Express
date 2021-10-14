const express = require('express');
const UsuarioRegistroController = require('../controllers/usuarioRegistroController');

class UsuarioRegistroRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    config(){
        //CREAR EL OBJETO USUARIOREGISTROCONTROLLER
        const NUsuarioRegistroC = new UsuarioRegistroController();
        //CREACION DE RUTAS // END POINTS
        this.router.post('/registro', NUsuarioRegistroC.registrarUsuarios);
        this.router.get('/registro', NUsuarioRegistroC.obtenerUsuarios);
        this.router.put('/registro', NUsuarioRegistroC.actualizarUsuario);
        this.router.delete('/registro', NUsuarioRegistroC.eliminarUsuario);
        this.router.get('/registro/id', NUsuarioRegistroC.obtenerUsuarioId);
        this.router.get('/registro/nombre', NUsuarioRegistroC.obtenerUsuarioName);
        this.router.get('/login', NUsuarioRegistroC.login);

    }
}
module.exports = UsuarioRegistroRouter;