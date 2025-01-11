//Namespace es como una clase pero no se necesita hacer de inyeccion de dependencia para usar sus metodos.

import { Response } from "express";

//Se usa el generico 'T' para poder definir cualquier tipo de dato que quiera asignarle a data.
interface HttpResponseI<T> {
    code :number, //201
    data?: T,  //null
    message: string  //Transacción exitosa

} 
//Se crea una interfaz para que la funcion del namespace este ligada a dicha interfaz y retorne valores de acuerdo a ella.
//Sino una funcion no esta ligada a una interfaz esta va a estar ligada a la data que retornamos.

export namespace HttpResponse{

    export const response = <T> (
        code: number, 
        data?: T, 
        message:string = 'Transaccion éxitosa'
    ): HttpResponseI<T> => {
            return{
                code, 
                data, 
                message
            }
    }

    export const fail = <T> (
        res: Response,
        code: number,
        data?: T,
        message: string = 'Ocurrio un error inesperado'

    ) => {
        return res.status(code).json({
            code,
            data,
            message
        });
    };

}


