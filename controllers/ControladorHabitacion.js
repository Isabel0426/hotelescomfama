export class ControladorHabitacion{


    constructor(){}

    //buscar habitaciones
    buscarHabitaciones(request,response){

        //Intento resolver la PETICION
        try{
           response.status(200).json({
            mensaje:"exito en la consulta",
            datos:["habi1","200USD","tv por cable"]
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar habitacion por id
    buscarHabitacionPorId(request,response){
        let identificador=request.params.id
        console.log(identificador)
        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos:["habi1","200USD","tv por cable"]
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar habitacion
    agregarHabitacion(request,response){
        let cuerpo=request.body
        console.log(cuerpo)
        try{
            response.status(200).json({
                mensaje:"exito agregando la habitacion",
                datos:cuerpo
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //editar habitacion
    editarHabitacion(request,response){
        //Recibir id como parametro
        let id=request.params.id

        //Recibir los datos que voy a cambiar
        let datos=request.body
        try{
            response.status(200).json({mensaje:"exito editando la habitacion"+id,
            datos:datos}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }

    }

    //eliminar habitacion
    eliminarHabitacion(request,response){
        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }
    }



}