const servicio = require('../models/servicioRegistro');

class ServicioController{
    constructor(){

    }

    crearServicio(req, res){
        servicio.create(req.body,(error,data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(201).json(data);
            }
        });
    }

    obtenerSercivio(req,res){
        servicio.find((error,data)=>{
            if(error){
                res.status(500).json({message: "Error al buscar los datos"});
            }else{
                res.status(200).json(data);
            }
        });
    }
    actualizarServicio(req,res){
        let {id, nombre, descripcion, codigo} = req.body;
        let obj = {
            nombre, descripcion,codigo
        }

        servicio.findByIdAndUpdate(id,{
            $set: obj
        },(error,data)=>{
            if(error){
                res.status(500).json({ error });
            }else{
                res.status(200).json(data);
            }
        });
    }
    eliminarServicio(req, res){
        let { id } = req.body;
        servicio.findByIdAndRemove(id,(error,data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
        
    }

    

}
module.exports = ServicioController;