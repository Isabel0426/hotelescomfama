import mongoose from "mongoose";

const Schema = mongoose.Schema; //Esquema de datos: que voy a permitir manipular en mi aplicacion

//Como modificarlo:describir una habitacion
//MODELO DE DATO: es una estructura que encierra un esquema 
const Reserva =new Schema({
    idHabitacion:{
        type:String,
        required:true
    },
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroNiños:{
        type:Number,
        required:false
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        required:true
    }
})

const modeloReserva=mongoose.model('reserva',Reserva)