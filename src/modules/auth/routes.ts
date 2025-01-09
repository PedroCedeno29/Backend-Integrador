//En las llaves se ubica que es lo que se quiere traer, en este caso Router
import { NextFunction, Request, Response, Router } from "express"
import { RegisterController } from "./controller";

//Iniciarlizar una variable que contenga la funcion Router() y poder usar sus metodos.
//Es una funcionalidad de Express que permite agrupar rutas relacionadas y manejar las solicitudes HTTP de manera organizada.
const routes = Router();

//Aquí inicializas un objeto Router para agrupar las rutas de tu módulo de autenticación.
//Este objeto te permitirá registrar rutas HTTP como GET, POST, PUT, etc., asociándolas con controladores o funciones específicas.
//Vamos a usar una ruta de tipo post ya que vamos a enviar algo de nuestro front al back.
routes.post('/register', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await RegisterController(req)    //Es el controlador que contiene la lógica para manejar el registro del usuario.
        res.status(201).json(response)
        //Responde al cliente con un código de estado 201 (que significa "Creado").
        //El método json() envía la respuesta en formato JSON al cliente, incluyendo los datos de la variable response (que vienen a ser los datos del usuario creado).

        
    } catch (error) {
        throw error
    }
})

export default routes; 
//Se exportan las rutas para usarlas en el index.ts


//Una vez que tienes el objeto routes, puedes acceder a los métodos de Router para manejar solicitudes HTTP como:
//routes.get(path, callback): Maneja solicitudes GET
//routes.post(path, callback): Maneja solicitudes POST.