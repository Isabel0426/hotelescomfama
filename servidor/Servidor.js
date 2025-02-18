//LLAMAMOS A EXPRESS
import express from 'express'
import { conectar } from '../database/conexion.js'

//LLamamos a las RUTAS
import {rutas} from '../routes/rutas.js'

//llamamos al metodo conectar con bd

export class Servidor{

    constructor(){
        this.app = express() //atributo una variable
        this.habilitarBody()
        this.atenderPeticiones() //atiendo las peticiones del usuario
    }

    atenderPeticiones(){ //ENRUTARPETICIONES
        this.app.use('/',rutas)   
    }

    habilitarBody(){
        this.app.use(express.json())
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido "+process.env.PORT)
        })
    }

    conectarconBD(){
        conectar()
    }
}