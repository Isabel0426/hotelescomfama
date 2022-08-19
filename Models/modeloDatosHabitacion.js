//Importar a Mongoose
import mongoose from "mongoose";

const Schema = mongoose.Schema; //Esquema de datos: que voy a permitir manipular en mi aplicacion

//Como modificarlo:describir una habitacion
//MODELO DE DATO: es una estructura que encierra un esquema 
const Habitacion =new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,//porque mongo no guarda imagenes sino texto
        required:false
    },
    numeroPersonas:{
        type:String,
        required:true
    }
})

const modeloHabitacion=mongoose.model('habitacion',Habitacion)
