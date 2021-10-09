const usuarioRegistro = require('../models/usuarioRegistro');

class UsuarioRegistroController {
    constructor() {

    }


    registrarUsuarios(req, res) {
        let correo = req.body.correo_electronico;
        usuarioRegistro.findOne({correo_electronico: correo},(error, data)=>{
            if(data == null){
                usuarioRegistro.create(req.body, (error, data) => {
                    if (error) {
                        res.status(400).json({ error });
                    } else {
                        res.status(201).json(data);
                    }
                });
            }
            else if(error){
                res.status(400).json({ error });
            }
            else{
                res.status(200).json({message: "El usuario ya existe.. No se creo un nuevo usuario."})
                 
            }
        })
        
    }
    logging(req,res){
        let correo = req.body.correo_electronico;
        let c = req.bod.contraseña;
        usuarioRegistro.findOne({correo_electronico: correo},(error, data)=>{
            if(data == null){
                res.status(200).json({message: "El usuario ingresado no existe."});
            }
            if(data){
                if(usuarioRegistro.contraseña == c ){
                    res.status(200).json({message: "Longging correcto."});
                }
                else{
                    res.status().json({message: "Contraseña incorrecta."});
                } 
            }
            else{
                res.status(400).json(error);
            }
        })
    
    }

    obtenerUsuarios(req,res){
        usuarioRegistro.find((error,data)=>{
            if(error){
                res.status(500).json(error);
            }
            else if(data == null){
                res.status(201).json({message: "Base de datos vacia..."});
            }
            else{
                res.status(200).json(data);
            }
        });
    }
    obtenerUsuarioId(req,res){
        let id = req.body.id;
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
        let nombre = req.body.nombre;
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