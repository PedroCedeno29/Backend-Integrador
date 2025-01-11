import { UserI } from "../../interfaces/Auth.interface";

//fs: file system
//Esta libreria es la que nos va permitir leer y escribir archivos dentro de nuestro proyecto de node.
import fs from 'fs/promises'

//Esto sirve para leer la ruta del sistema operativos de manera correcta en nuestro proyecto.
import path from 'path';


//Arreglo para simular un registro de usuarios en el repositorio.
//Arreglo de tipo: interface UserI pero como arreglo y esta variable es igual a un arreglo.
const users: UserI[] = []

//Se crea una variable para almacenar la ruta de nuestro archivo en el S.O.
const dataFilePath = path.join('src','data','users.json');

//Aqui se le pone el nombre de Auth al inicio ya que viene de la subcarpeta auth, esto hace referencia al modulo auth y al archivo en que se esta trabajando, en este caso Repositoy.
export default class AuthRepository{

    async readUsers(): Promise<UserI[]> {
        try {
            //metodo fd.readFile: sirve para leer el contenido del archivo que le pasamos por parametro.
            const data = await fs.readFile(dataFilePath, 'utf-8') //utf8 es para asignarle un tipo de texto al archivo
            return JSON.parse(data);
        } catch (error) {
            return []
        }
    }

    async writeUsers(users: UserI[]): Promise<void>{
        //EL metodo writeFile nos sirve para escribir en el archivo user.json
        //Hay que enviar al archivo.json la data serializada, es transformar un objeto a string
        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8');
    }
    //Metodo de la clase: Lo que va a hacer nuestro repositorio. Simular la conexion con la base de datos.
    //El Promise requiere del argumento de tipo genérico (en este caso va a retornar el UserI).
    //El parametro 'user' es de tipo UserI es decir que es del tipo de la interfaz que se creó en el archivo Auth.interfaces.ts que contiene 2 propiedas username y password.
    async createUser(user: UserI): Promise<UserI>{      //Dentro de las <> va el tipo de dato que va a retornar la funcion async
       const users = await this.readUsers();
        users.push(user);
        await this.writeUsers(users);
        return user;                                    //Se recomienda usar un return como una confirmacion
    }

    async findByUsername(username: string): Promise<UserI | undefined>{
        const users = await this.readUsers();
        //Esta funcion find() sirve para recorrer cada elemento de un arreglo, pasando ese elemento como argumento al callback, es decir cada elemento del arreglo se asigna al parametro user.
        return users.find((user) => user.username === username); //Cuando es una comparación de una sola línea no es necesaria usar las llaves y el return, esto sería de manera implícita.

     }
}



//Las funciones declaradas como async en TypeScript (o JavaScript) devuelven automáticamente un Promise, lo que permite manejarlo de manera asíncrona mediante .then() o await.


//Cuando se habla de retornar algo de manera implícita, se refiere a que el entorno de desarrollo (TypeScript en este caso) entiende automáticamente qué debe devolver al evaluar una expresión, sin necesidad de que escribas la palabra clave return de forma explícita.

//En esta clase de repositoy no se necesita de un constructor ya que no se necesita hacer una instancia.

//Ctrl + espacio