const express = require("express");
const Dbconnection = require("./database/dbConnection");
const ServicioRegistroRouter = require("./routers/servicioRegistroRouter");
const UsuarioRegistroRouter = require("./routers/usuarioRegistroRuter");
const SuscripcionRegistroRouter = require("./routers/suscripcionRegistroRouter");
const cors = require('cors');


class Server{
    constructor(){
        // CREAR OBJETO DE CONEXION A LA BASE DE DATOS
        const bdConnection = new Dbconnection();
        // CONSTRUIMOS UNA APLICACION EXPRES PARA MONTAR EL SERVIDOR
        this.app = express();
        // INDICAMOS EL PUERTO POR EL QUE VAMOS A TRABAJAR EN EL SERVIDOR LOCAL
        //Para realizar solicitudes de un servidor externo e impedir el bloqueo por CORS.
        this.app.use(cors());        
        this.app.set("port", process.env.PORT || 3000);
        // PROCESAREMOS DATOS EN FORMATO JSON
        this.app.use(express.json());
        // CREAR LA RUTA RAIZ
        const router = express.Router();
        router.get('/',(req,res)=>{
            res.status(200).json({Message: "Corriendo el Servidor"});
        });
        /***********CREAMOS LAS OTRAS RUTAS DIFERENTES A LA RAIZ*************/
        const usuarioRegistoRouter = new UsuarioRegistroRouter();
        const servicioRegistroRouter = new ServicioRegistroRouter();
        const suscripcionRegistoRouter = new SuscripcionRegistroRouter();

        /********AÑADIMOS RUTAS*********/
        this.app.use(router);
        this.app.use(usuarioRegistoRouter.router);
        this.app.use(servicioRegistroRouter.router);
        this.app.use(suscripcionRegistoRouter.router);

        /*******LWVANTAR EL SERVIDOR********/
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Corriendo por el puerto =>", this.app.get('port'));
        })
    }
}
new Server();
