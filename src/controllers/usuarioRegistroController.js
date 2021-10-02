const usuarioRegistro = require('../models/usuarioRegistro');

class UsuarioRegistroController {
    constructor() {

    }


    registrarUsuarios(req, res) {
        usuarioRegistro.create(req.body, (error, data) => {
            if (error) {
                res.status(400).json({ error });;
            } else {
                res.status(201).json(data);
            }
        });
    }
    obtenerUsuarios(req,res){
        usuarioRegistro.find((error,data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(200).json(data);
            }
        });
    }
    obtenerUsuarioId(req,res){
        let id = req.body;
        usuarioRegistro.findById(id,(error,data)=>{
            if(error){
                res.status(401).json({message: "Error"});
            }else{
                res.status(200).json(data);
            }
        })
    }
    // PRUEBA DE OBTENER POR NOMBRE
    obtenerUsuarioName(req,res){
        let nombre = req.body;
        usuarioRegistro.findById(nombre,(error,data)=>{
            if(error){
                res.status(401).json({message: "Error"});
            }else{
                res.status(200).json(data);
            }
        })
    }

    actualizarUsuario(req, res){
        let {id, correo_electronico, contraseña, id_tipodocumento, doc_identidad, nombre, apellido, telefono, ciudad } = req.body;
        let obj ={
            correo_electronico, contraseña, id_tipodocumento, doc_identidad, nombre, apellido, telefono, ciudad
        }
        usuarioRegistro.findByIdAndUpdate(id,{
            $set: obj
        },(error, ddata)=>{
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(data);
            }
        });
    }
    eliminarUsuario(req,res){
        let {id} = req.body;
        usuarioRegistro.findByIdAndRemove(id,(error,data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }

}

module.exports = UsuarioRegistroController;