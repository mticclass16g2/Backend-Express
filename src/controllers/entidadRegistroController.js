const { response } = require('express');
const entidad = require('../models/entidadRegistro');

class EntidadController{
    constructor(){

    }
    crearEntidad(req,res){
        entidad.create(req.body,(error, date)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(201).json({message: "La entidad se ha creado correctamente..."})
            }
        })
    }
    obtenerEntidades(req,res){
        entidad.find((error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({data});
            }
        })
    }
    editarEntidades(req,res){
        let {id, persona_id, companiaNombre, companiaLogo, servicio_id, ciudad_id, urlServicio, descripcionServicio, urlFacebook, urlInstagram} = req.body;
        let obj = {
            persona_id, companiaNombre, companiaLogo, servicio_id, ciudad_id, urlServicio, descripcionServicio, urlFacebook, urlInstagram
        } 
        entidad.findByIdAndUpdate(id,{
            $set: obj
        },(error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json(data);
            }
        })
    }
    eliminarEntidades(req,res){
        let id = req.body.id;
        entidad.findByIdAndRemove(id,(error,data)=>{
            if(error){
                response.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({message: "La entidad ha sido eleminada...."})
            }
        })
    }
}

module.exports = EntidadController;