const mongoose = require('mongoose');
const database = require('./urlDAtabase');

class Dbconnection{
    constructor(){
        // CONECTAR A LA BD ENCIANDOLE COMO PARAMETRO LA ULR DE LA CONEXION
        mongoose.connect(database.db).then(()=>{
            console.log("conexion exitosa a la Base de Datos");
        }).catch(error=>{
            console.error(error);
        })
    }
}

module.exports = Dbconnection; 