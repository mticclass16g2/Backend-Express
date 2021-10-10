const response  = require('express');
const suscripcion = require('../models/suscripcionRegistro');

class SuscripcionController{
    constructor(){

    }
    crearSuscripcion(req,res){
        suscripcion.create(req.body,(error, date)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(201).json({message: "La suscripcion se ha creado correctamente..."})
            }
        })
    }
    obtenerSuscripciones(req,res){
        suscripcion.find((error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({data});
            }
        })
    }
    obtenerSuscripcionId(req,res){
        let id = req.body.id;
        suscripcion.findById(id,(error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({data});
            }
        })
    }
    editarSuscripcion(req,res){
        let {id, persona_id, companiaNombre, companiaLogo, servicio_id, ciudad_id,
            urlServicio, descripcionServicio, urlFacebook, urlInstagram} = req.body;
        let obj = {
            persona_id, companiaNombre, companiaLogo, servicio_id, ciudad_id, urlServicio,
            descripcionServicio, urlFacebook, urlInstagram
        } 
        suscripcion.findByIdAndUpdate(id,{
            $set: obj
        },(error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({message: "Los datos se han actualizado correctamente..."});
            }
        })
    }
    eliminarSuscripcion(req,res){
        let id = req.body.id;
        suscripcion.findByIdAndRemove(id,(error,data)=>{
            if(error){
                res.status(400).json({message: "Error"});
            }
            else{
                res.status(200).json({message: "La suscripcion ha sido eleminada...."})
            }
        })
    }
}

module.exports = SuscripcionController;