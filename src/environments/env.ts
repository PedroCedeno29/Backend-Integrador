//dotenv es un módulo de Node.js que permite cargar variables de entorno desde un archivo .env en el entorno de ejecución.
import {config} from "dotenv"


//La funcion config() lee el archivo .env en el directorio raíz del proyecto.
//Carga las variables definidas en el archivo .env en process.env.
config();

export const PORT = process.env.PORT ?? 3000 //NULLISH COALESCING (??): Si la variable es nula o no existe que asigne el valor de la derecha.


//El objeto process.env contiene todas las variables de entorno definidas en el sistema o cargadas desde un archivo .env
//Sin invocar config(), las variables definidas en el archivo .env no estarán disponibles en process.env.