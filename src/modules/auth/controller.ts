import { Request } from "express";
import { UserI } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";


//No se crea una clase, se puede hacer de manera mas directa, creando una constante que contengo una funcion asincronica.
//Estamos haciendo una peticion de tipo POST. Cada peticion de tipo POST se envia en el cuerpo(body) de la solicitud(Request).
//No se crea una clase porque no hay necesidad de guardar propiedades o manejar estado; simplemente se recibe una solicitud (req) y se llama al servicio.
export const RegisterController = async(req: Request) => {
    try {
        const {username, password} = req.body as UserI             //Desecturación: Acceder a las propiedades directamente de un objeto. Entre llaves van las propiedades desestructuradas. para que sea mas rápido.
        //req.body es una propiedad del objeto req que contiene los datos enviados en el cuerpo de la solicitud HTTP.
        //Se pone as UserI para asegurar que el req.body cumpla con la estructura de la interface UserI, es decir que contenga username y password.
        const user = await new AuthServices().registerService(username, password)
        return {'message' : 'Usuario', 'usuario': user}
    } catch (error) {
        throw error
    }
}


//No se declara una clase porque toda la información que necesitas (username, password) se pasa directamente como argumentos o proviene de la solicitud HTTP (req.body).

//req es un objeto de solicitud HTTP proporcionado por Express (un framework de Node.js). Este objeto contiene información sobre la solicitud que envía el cliente (como datos del formulario, encabezados, parámetros de URL, etc.).