//Siempre se debe hacer la importacion de express
import express, { NextFunction, Request, Response } from 'express';
import { PORT } from './environments/env';

//Cuando algo es de tipo funcion siempre hay que mandarla a llamar (hacer que se ejecute).
//Se guarda dentro de una constante todo lo que viene dentro de la funcion express().
//Aquí se crea una instancia de una aplicación Express, que se almacena en la variable app. Esta instancia será utilizada para configurar las rutas y gestionar las solicitudes
const app = express();

const prefix: string = "/api"; //Prefijo api

//Se define el primer metodo HTTP
//El metodo get se utiliza para realizar consultas de manera rápida
//cuando visitas http://localhost:3000/ en tu navegador, Express maneja la solicitud usando req para leer los detalles de la solicitud 
// y usa res.send() para enviar de vuelta 'Hello World' como respuesta al navegador.
app.get(`${prefix}/auth`, async (req: Request, res:Response, next: NextFunction) => {
    res.send('Hola Mundo');
})
//El parámetro '/' representa la ruta raíz del servidor web. Es la parte de la URL después del nombre de dominio o el número de puerto que se está manejando. 
//la ruta quedaria  =  http://localhost:3000/api/auth

//La funcion listen recibe como parametro un puerto y tambien puede recibir un callback ()
const port:number = Number(PORT);

app.listen(port, () => {
    console.log(`El puerto se ha levantado en el puerto: ${port}`);
})


//este codigo viene a ser considerado un servidor ya que esta levantado en un puerto interno de la máquina.

//Cuando se hable del servidor se hace referencia a nuestro programa.

//Cuando ponemos localhost significa que estamos apuntando a la ip de nuestra máquina y seguido va el puerto en el que se esta levantando el servidor.

//El callback es enviar de parametro una funcion a otra funcion

