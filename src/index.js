const express = require("express");
const Dbconnection = require("./database/dbConnection");
const UsuarioRegistroRouter = require("./routers/usuarioRegistroRuter");
const ServicioRegistroRouter = require("./routers/usuarioRegistroRuter");



class Server{
    constructor(){
        // CREAR OBJETO DE CONEXION A LA BASE DE DATOS
        const bdConnection = new Dbconnection();
        // CONSTRUIMOS UNA APLICACION EXPRES PARA MONTAR EL SERVIDOR
        this.app = express();
        // INDICAMOS EL PUERTO POR EL QUE VAMOS A TRABAJAR EN EL SERVIDOR LOCAL
        this.app.set("port", process.env.PORT || 3000);
        // PROCESAREMOS DATOS EN FORMATO JSON
        this.app.use(express.json());
        // CREAR LA RUTA RAIZ
        const router = express.Router();
        router.get('/',(req,res)=>{
            res.status(200).json({Message: "Corriendo el Servidor"});
        });
        /***********CREAR LAS OTRAS RUTAS DIFERENTES A LA RAIZ*************/
        const usuarioRegistoRouter = new UsuarioRegistroRouter();
        const servicioRegistoRouter = new ServicioRegistroRouter();

        /********AÑADIMOS RUTAS*********/
        this.app.use(router);
        this.app.use(usuarioRegistoRouter.router);
        this.app.use(servicioRegistoRouter.router);
        /*******LWVANTAR EL SERVIDOR********/
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Corriendo por el puerto =>", this.app.get('port'));
        })
    }
}

new Server();