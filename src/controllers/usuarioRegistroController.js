const usuarioRegistro = require('../models/usuarioRegistro');

class UsuarioRegistroController {
    constructor() {

    }


    registrarUsuarios(req, res) {
        let correo = req.body.email;
        usuarioRegistro.findOne({email: correo},(error, data)=>{
            console.log(data);
            if(data == null){

                usuarioRegistro.create(req.body, (error, data) => {
                    if (error) {
                        res.status(400).json({ error });
                    } else {
                        res.status(201).json({message: "El Usuario se ha creado con Exito."});
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
    login(req,res){
        let correo = req.body.email;
        let c = req.body.loginPassword;
        //console.log(correo,c,"primero");
        usuarioRegistro.findOne({email: correo},(error, data)=>{
            //console.log(data.correo_electronico, data.contraseña,"Segundo")
            if(data == null){
                res.status(400).json({message: "El usuario ingresado no existe. Por favor registrarse."});
            }
            else if(error){
                console.log("Aqui esta el error")
                res.status(400).json(error);
            }
            else{
                if(data.loginPassword == c ){
                    res.status(200).json({message: "Longin correcto."});
                }
                else{
                    res.status(400).json({message: "Contraseña incorrecta."});
                } 
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
                console.log("Estamos aqui, la base de datos vacia");
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
        let nom = req.body.nombre;
        console.log(nom+"  Primero")
        usuarioRegistro.find({nombre: nom},(error,data)=>{
            console.log(data)
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
            if(data == null){
                res.status(200).json({message: "El ID: "+id+" no existe en la BD."})
            }
            else if(error){
                res.status(500).send();
            }else{
                res.status(200).json({message: "El usuario con ID: "+ id +" Fue eliminado correctamente."});
            }
        })
    }

}

module.exports = UsuarioRegistroController;