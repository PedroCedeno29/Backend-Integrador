//Siempre se debe hacer la importacion de express
import express, { NextFunction, Request, Response } from 'express';
import { PORT } from './environments/env';

// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";

//Cuando algo es de tipo funcion siempre hay que mandarla a llamar (hacer que se ejecute).
//Se guarda dentro de una constante todo lo que viene dentro de la funcion express().
//Aquí se crea una instancia de una aplicación Express, que se almacena en la variable app. Esta instancia será utilizada para configurar las rutas y gestionar las solicitudes
const app = express();


//Es un middleware integrado en Express que procesa los cuerpos de las solicitudes con formato JSON.
//Permite que el contenido enviado por el cliente (por ejemplo, un formulario con datos en JSON) sea convertido automáticamente en un objeto JavaScript accesible desde req.body.
app.use(express.json()); 

//Aquí se define un prefijo que será usado como base para todas las rutas API.
const prefix: string = "/api"; //Prefijo api


//app.use(): Registra un middleware o conjunto de rutas en la aplicación.
//En este caso, estás diciendo que cualquier solicitud que comience con /api/auth será manejada por las rutas definidas en authRoutes.
app.use(`${prefix}/auth`, authRoutes)
//El parámetro '/' representa la ruta raíz del servidor web. Es la parte de la URL después del nombre de dominio o el número de puerto que se está manejando. 
//la ruta quedaria  =  http://localhost:3000/api/auth
//Todas las rutas registradas en authRoutes estarán bajo el prefijo /api/auth.

//La funcion listen recibe como parametro un puerto y tambien puede recibir un callback ()
const port:number = Number(PORT);


//app.list(): Es el método de Express que inicia el servidor y es esencial para que el servidor funcione. Sino se llama el servidor nunca estará escuchando y no podra responder a las solicitudes.
//Inicia el servidor y lo pone a escuchar solicitudes en el puerto especificado.
app.listen(port, () => {
    console.log(`El puerto se ha levantado en el puerto: ${port}`);
})


//este codigo viene a ser considerado un servidor ya que esta levantado en un puerto interno de la máquina.

//Cuando se hable del servidor se hace referencia a nuestro programa.

//Cuando ponemos localhost significa que estamos apuntando a la ip de nuestra máquina y seguido va el puerto en el que se esta levantando el servidor.

//El callback es enviar de parametro una funcion a otra funcion

