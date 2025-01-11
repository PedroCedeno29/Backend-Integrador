//Ahora vamos a hacer una inyeccion de dependencia

import { CodesHttpEnum } from "../../enums/codesHttpEnum";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";

//La inyeccion de dependencia es instanciar otra clase dentro de una clase para que esta de aqui herede sus metodos y propiedades.
export class AuthServices{
    //Cuando se define algo de manera privada la conveccion que se suele usar es una barra baja y el nombre de algo.
    //Se crea una propiedad de la clase AuthService y esta es de tipo AuthRepository, para luego instanciarla dentro del constructor.
    private readonly _authRepository: AuthRepository

    constructor(){
        //Instancia de AuthRepositoy
        //Esto se conoce como inyección de dependencia manual. En este caso, AuthServices depende de AuthRepository para funcionar correctamente.
        this._authRepository = new AuthRepository();   //Se usa el guion bajo '_' para indicar visualmente que no deberia ser accedida fuera de la clase. Esto es solo una convencion
    }


    async registerService(username: string, password: string){
        //Esta constante va a contener la funcion de la clase AuthRepository findByUsername(username).
        const existingUser = await this._authRepository.findByUsername(username) // Usas await para esperar la resolución del Promise que devuelve findByUsername, es decir el resultado de la funcion.
                                                                                //Como findByUsername es una función async que retorna un Promise, necesitas usar await para detener la ejecución de registerService hasta que el Promise de findByUsername se resuelva.

        //Después de obtener existingUser con await, verificas si el usuario ya existe
        //Se va a realizar una validacion por si el usuario ya existe en la base de datos.
        if(existingUser){
            throw new Error('El usuario ya existe');
            
        }

        //Si el usuario no existe se procede a crear uno mediante los parametros pasados a la funcion.
        const newUser = await this._authRepository.createUser({username, password});
        return HttpResponse.response(CodesHttpEnum.created, newUser, 'usuario creado con éxito')

    }

    async loginService(username: string, password: string){
        const allUser = await this._authRepository.readUsers();

        const existUser = allUser.find( (user) => {
            return user.username == username;
        } )

        if(!existUser){
            throw new Error('El usuario no existe')
        }

        if(existUser.password !== password){
            throw new Error('Clave incorrecta')
        }
        
        
    }
}