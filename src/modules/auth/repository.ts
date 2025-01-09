import { UserI } from "../../interfaces/Auth.interface";

//Arreglo para simular un registro de usuarios en el repositorio.
//Arreglo de tipo: interface UserI pero como arreglo y esta variable es igual a un arreglo.
const users: UserI[] = []

//Aqui se le pone el nombre de Auth al inicio ya que viene de la subcarpeta auth, esto hace referencia al modulo auth y al archivo en que se esta trabajando, en este caso Repositoy.
export default class AuthRepository{
    //Metodo de la clase: Lo que va a hacer nuestro repositorio. Simular la conexion con la base de datos.
    //El Promise requiere del argumento de tipo genérico (en este caso va a retornar el UserI).
    //El parametro 'user' es de tipo UserI es decir que es del tipo de la interfaz que se creó en el archivo Auth.interfaces.ts que contiene 2 propiedas username y password.
    async createUser(user: UserI): Promise<UserI>{      //Dentro de las <> va el tipo de dato que va a retornar la funcion async
       users.push(user);
        return user;                                    //Se recomienda usar un return como una confirmacion
    }

    async findByUsername(username: string): Promise<UserI | undefined>{
        //Esta funcion recibe un callback como parametro de la funcion find()
        return users.find((user) => user.username === username); //Cuando es una comparación de una sola línea no es necesaria usar las llaves y el return, esto sería de manera implícita.

     }
}



//Las funciones declaradas como async en TypeScript (o JavaScript) devuelven automáticamente un Promise, lo que permite manejarlo de manera asíncrona mediante .then() o await.


//Cuando se habla de retornar algo de manera implícita, se refiere a que el entorno de desarrollo (TypeScript en este caso) entiende automáticamente qué debe devolver al evaluar una expresión, sin necesidad de que escribas la palabra clave return de forma explícita.

//En esta clase de repositoy no se necesita de un constructor ya que no se necesita hacer una instancia.

//Ctrl + espacio