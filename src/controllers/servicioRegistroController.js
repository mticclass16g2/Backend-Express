const servicioRegistro = require('../models/servicioRegistro');

class ServicioRegistroController {
    constructor() {

    }


    registrarServicios(req, res) {
        servicioRegistro.create(req.body, (error, data) => {
            if (error) {
                res.status(400).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    
    obtenerServicios(req,res){
        servicioRegistro.find((error,data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(200).json(data);
            }
        });
    }
    obtenerServicioId(req,res){
        let id = req.body;
        servicioRegistro.findById(id,(error,data)=>{
            if(error){
                res.status(401).json({message: "Error"});
            }else{
                res.status(200).json(data);
            }
        })
    }
    // PRUEBA DE OBTENER POR NOMBRE
    obtenerServicioName(req,res){
        let nombre = req.body;
        servicioRegistro.findById(nombre,(error,data)=>{
            if(error){
                res.status(401).json({message: "Error"});
            }else{
                res.status(200).json(data);
            }
        })
    }

    actualizarServicio(req, res){
        let {id,  nombre, descripcion, activo } = req.body;
        let obj ={
            id,  nombre, descripcion, activo
        }
        servicioRegistro.findByIdAndUpdate(id,{
            $set: obj
        },(error, ddata)=>{
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(data);
            }
        });
    }


    eliminarServicio(req,res){
        let {id} = req.body;
        servicioRegistro.findByIdAndRemove(id,(error,data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }

}

module.exports = ServicioRegistroController;